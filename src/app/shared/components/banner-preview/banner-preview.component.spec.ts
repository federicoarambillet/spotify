import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPreviewComponent } from './banner-preview.component';

describe('BannerPreviewComponent', () => {
  let component: BannerPreviewComponent;
  let fixture: ComponentFixture<BannerPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
