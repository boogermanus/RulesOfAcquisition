import { ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { NavMenuComponent } from './nav-menu.component';
import {MaterialModule} from "../material.module";
import {provideRouter, RouterModule} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

describe('NavMenuComponent', () => {
  let component: NavMenuComponent;
  let fixture: ComponentFixture<NavMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NavMenuComponent ],
      imports: [MaterialModule, RouterModule],
      providers: [provideRouter([])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
