import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';


import { SideBarComponent } from './side-bar.component';
import { LogoComponent } from '../logo/logo.component';
import { QuickAccessComponent } from './components/quick-access/quick-access.component';

describe('SideBarComponent', () => {

  let component: SideBarComponent;
  let fixture: ComponentFixture<SideBarComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SideBarComponent, LogoComponent, QuickAccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});