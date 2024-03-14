import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalLogInComponent } from '../modal-log-in/modal-log-in.component';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-button-modal-log-in',
  templateUrl: './button-modal-log-in.component.html',
  styleUrl: './button-modal-log-in.component.css'
})

export class ButtonModalLogInComponent {

  @Input() track: TrackModel = { _id: 0, name: '', album: '', url: '', cover: '' };

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(ModalLogInComponent, {
      width: '800px',
      height: '450px',
      data: { track: this.track },
    });
  }

}
