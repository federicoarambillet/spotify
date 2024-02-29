import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-main',
  templateUrl: './button-main.component.html',
  styleUrl: './button-main.component.css'
})

export class ButtonMainComponent {

  @Input() title: string = '';
  @Input() route: string = '';
  @Input() mode: 'small' | 'big' = 'big';

  constructor(private router: Router) {}

  ngOnInit() {
  }

  redirectTo() {
    this.router.navigate([this.route])
  }
}
