import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageComponent } from './home-page.component';
import { SideBarComponent } from '@shared/components/side-bar/side-bar.component';

import { RouterTestingModule } from '@angular/router/testing';
import { MediaPlayerComponent } from '@shared/components/media-player/media-player.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ 
        HomePageComponent,
        SideBarComponent,
        MediaPlayerComponent
      ],
      schemas: [NO_ERRORS_SCHEMA] 
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
