import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSpotifyComponent } from './header-spotify.component';

describe('HeaderSpotifyComponent', () => {
  let component: HeaderSpotifyComponent;
  let fixture: ComponentFixture<HeaderSpotifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSpotifyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderSpotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
