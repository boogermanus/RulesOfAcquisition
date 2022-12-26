import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleFavoritesComponent } from './rule-favorites.component';

describe('RuleFavoritesComponent', () => {
  let component: RuleFavoritesComponent;
  let fixture: ComponentFixture<RuleFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
