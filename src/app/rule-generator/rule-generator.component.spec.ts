import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import { RulesService } from '../services/rules.service';

import { RuleGeneratorComponent } from './rule-generator.component';
import {RuleViewComponent} from "../rule-view/rule-view.component";
import {MaterialModule} from "../material.module";

describe('RuleGeneratorComponent', () => {
  let component: RuleGeneratorComponent;
  let fixture: ComponentFixture<RuleGeneratorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleGeneratorComponent, RuleViewComponent],
      imports: [MaterialModule]
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
