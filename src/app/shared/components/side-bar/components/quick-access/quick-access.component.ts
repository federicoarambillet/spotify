import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-access',
  templateUrl: './quick-access.component.html',
  styleUrl: './quick-access.component.css'
})

export class QuickAccessComponent implements OnInit {

  public defaultOption: Array<any> = [];

  constructor() { }

  ngOnInit(): void {

    this.defaultOption = [
      {
        title: "Create your first playlist",
        description: "It's easy, we'll help you",
        button: "Create playlist"
      },
      {
        title: "Let's find some podcasts to follow",
        description: "We'll keep you updated on new episodes",
        button: "Browse podcasts"
      }
    ]
  }

}
