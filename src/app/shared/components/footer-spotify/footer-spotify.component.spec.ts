import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSpotifyComponent } from './footer-spotify.component';

describe('FooterSpotifyComponent', () => {
  let component: FooterSpotifyComponent;
  let fixture: ComponentFixture<FooterSpotifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterSpotifyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterSpotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
