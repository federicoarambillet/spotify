import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

import { TracksPageComponent } from './tracks-page.component';
import { SectionGenericComponent } from '@shared/components/section-generic/section-generic.component';

describe('TracksPageComponent', () => {

  let component: TracksPageComponent;
  let fixture: ComponentFixture<TracksPageComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      
      imports: [
        HttpClientModule
      ],
      declarations: [TracksPageComponent,SectionGenericComponent] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(TracksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});