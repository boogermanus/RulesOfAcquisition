import {TestBed, waitForAsync} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {provideRouter, RouterModule} from "@angular/router";
import {NavMenuComponent} from "./nav-menu/nav-menu.component";

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule
      ],
      declarations: [
        AppComponent,
        NavMenuComponent
      ],
      providers: [provideRouter([])]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
