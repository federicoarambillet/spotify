import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonModalLogInComponent } from './button-modal-log-in.component';

describe('ButtonModalLogInComponent', () => {
  let component: ButtonModalLogInComponent;
  let fixture: ComponentFixture<ButtonModalLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonModalLogInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonModalLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
