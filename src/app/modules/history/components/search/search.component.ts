import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  @Output() callbackData = new EventEmitter<string>();

  public src: string = '';

  constructor() {}

  ngOnInit(): void {}

  callSearch(term: string): void {
    if (term.toString().length >= 3) {
      this.callbackData.emit(term);
    }
  }

}
