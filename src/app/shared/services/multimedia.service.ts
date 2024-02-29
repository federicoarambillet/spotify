import { EventEmitter, Injectable, effect, signal } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})

export class MultimediaService {

  callback: EventEmitter<any> = new EventEmitter<any>();
  private audio?: HTMLAudioElement;

  public trackInfoSignal = signal<TrackModel | undefined>(undefined);

  public timeElapsedSignal = signal<string>('00:00');
  public timeRemainingSignal = signal<string>('-00:00');

  public playerStatusSignal = signal<string>('paused');
  public playerPercentageSignal = signal<number>(0);

  constructor(private cookieService: CookieService) {

    if (this.isAudioSupported()) {
      this.audio = new Audio();
    }

    effect(() => {
      const dataInfo = this.trackInfoSignal();
      if (dataInfo) {
        this.setAudio(dataInfo);
      }
    })

    this.listenAllEvents();

  }


  private isAudioSupported(): boolean {
    return typeof Audio !== 'undefined';
  }

  private listenAllEvents(): void {
    this.audio?.addEventListener('timeupdate', this.calculateTime, false);
    this.audio?.addEventListener('playing', this.setPlayerStatus, false);
    this.audio?.addEventListener('play', this.setPlayerStatus, false);
    this.audio?.addEventListener('pause', this.setPlayerStatus, false);
    this.audio?.addEventListener('ended', this.setPlayerStatus, false);

  }

  private setPlayerStatus = (state: any) => {
    switch (state.type) {
      case 'play':
        this.playerStatusSignal.set('play')
        break
      case 'playing':
        this.playerStatusSignal.set('playing')
        break
      case 'ended':
        this.playerStatusSignal.set('ended')
        break
      default:
        this.playerStatusSignal.set('paused')
        break;
    }
  }

  private calculateTime = () => {
    if (this.audio) {
      const { duration, currentTime } = this.audio;
      this.setTimeElapsed(currentTime);
      this.setRemaining(currentTime, duration);
      this.setPercentage(currentTime, duration);
    } else {
      console.error('Audio element is not initialized.');
    }
  }

  private setPercentage(currentTime: number, duration: number): void {
    //duration ---> 100%
    //currentTime ---> (x)
    //(currentTime * 100) / duration
    let percentage = (currentTime * 100) / duration;
    this.playerPercentageSignal.set(percentage);
  }

  private setTimeElapsed(currentTime: number): void {
    let seconds = Math.floor(currentTime % 60)
    let minutes = Math.floor((currentTime / 60) % 60)
    //00:00 ---> 01:05 --> 10:15
    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
    const displayFormat = `${displayMinutes}:${displaySeconds}`
    this.timeElapsedSignal.set(displayFormat)
  }

  private setRemaining(currentTime: number, duration: number): void {
    let timeLeft = duration - currentTime;
    let seconds = Math.floor(timeLeft % 60)
    let minutes = Math.floor((timeLeft / 60) % 60)
    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
    const displayFormat = `-${displayMinutes}:${displaySeconds}`
    this.timeRemainingSignal.set(displayFormat)
  }

  public setAudio(track: TrackModel): void {
    if (this.audio) {
      this.audio.src = track.url
      if (track.url && this.cookieService.check('token')) {
        this.audio.play()
      }
    }
  }

  public togglePlayer(): void {
    if (this.audio) {
      if (this.audio.src) {
        (this.audio.paused) ? this.audio.play() : this.audio.pause()
      }
    }
  }

  public seekAudio(percentage: number): void {
    if (this.audio) {
      const { duration } = this.audio
      const percentageToSecond = (percentage * duration) / 100
      this.audio.currentTime = percentageToSecond
    }
  }

}
