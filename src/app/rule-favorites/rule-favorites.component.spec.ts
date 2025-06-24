import { ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { RuleFavoritesComponent } from './rule-favorites.component';

describe('RuleFavoritesComponent', () => {
  let component: RuleFavoritesComponent;
  let fixture: ComponentFixture<RuleFavoritesComponent>;

  beforeEach(waitForAsync(() => {
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
