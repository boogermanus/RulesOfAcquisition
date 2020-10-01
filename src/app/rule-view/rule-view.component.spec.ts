import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleViewComponent } from './rule-view.component';

describe('RuleViewComponent', () => {
  let component: RuleViewComponent;
  let fixture: ComponentFixture<RuleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleViewComponent);
    component = fixture.componentInstance;
    component.rule = {
      number: 0,
      rule: '',
      source: '',
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
