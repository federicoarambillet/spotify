import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header-spotify',
  templateUrl: './header-spotify.component.html',
  styleUrl: './header-spotify.component.css'
})
export class HeaderSpotifyComponent {
  constructor(private router: Router) { }

  goTo(): void {
    this.router.navigate(['/offline']);
  }
}
