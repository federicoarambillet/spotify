import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  @Output() callBackData: EventEmitter<any> = new EventEmitter();
  public src: string = '';

  constructor() {

  }

  ngOnInit(): void {

  }

  callSearch(term: string | Event): void {
    if (term.toString().length >= 3) {
      this.callBackData.emit(term);
    }
  }

}
