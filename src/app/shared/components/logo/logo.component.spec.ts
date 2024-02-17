import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';

import { LogoComponent } from './logo.component'; 

describe('LogoComponent', () => {

  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [LogoComponent] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});