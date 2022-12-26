import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RulesService } from '../services/rules.service';

import { RuleGeneratorComponent } from './rule-generator.component';

describe('RuleGeneratorComponent', () => {
  let component: RuleGeneratorComponent;
  let fixture: ComponentFixture<RuleGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleGeneratorComponent ]
    })
    .compileComponents();
    TestBed.inject(RulesService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleGeneratorComponent);
    component = fixture.componentInstance;
    component.rule = {
      number: 0,
      rule: 'test',
      source: 'test'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
