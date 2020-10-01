import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleGeneratorComponent } from './rule-generator.component';

describe('RuleGeneratorComponent', () => {
  let component: RuleGeneratorComponent;
  let fixture: ComponentFixture<RuleGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
