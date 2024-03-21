import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTracksComponent } from './filter-tracks.component';

describe('FilterTracksComponent', () => {
  let component: FilterTracksComponent;
  let fixture: ComponentFixture<FilterTracksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterTracksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
