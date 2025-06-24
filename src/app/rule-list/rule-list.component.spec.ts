import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleListComponent } from './rule-list.component';
import {RuleViewComponent} from "../rule-view/rule-view.component";
import {MaterialModule} from "../material.module";

describe('RuleListComponent', () => {
  let component: RuleListComponent;
  let fixture: ComponentFixture<RuleListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleListComponent, RuleViewComponent ],
      imports: [MaterialModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
