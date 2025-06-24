
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { RuleViewComponent } from './rule-view.component';

describe('RuleViewComponent', () => {
  let component: RuleViewComponent;
  let fixture: ComponentFixture<RuleViewComponent>;

  beforeEach(waitForAsync(() => {
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
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('favoriteStyle', () => {
    it('should be defined', () => {
      expect(component.favoriteStyle).toBeDefined();
    });

    it('should return #ef7f1a when favorite is true', () => {
      component.favorite = true;
      expect(component.favoriteStyle.color).toEqual('#ef7f1a');
    });

    it('should return no color when favorite is false', () => {
      expect(component.favoriteStyle.color).toEqual('');
    });
  });

  describe('favoriteIcon', () => {
    it('should be defined', () => {
      expect(component.favoriteIcon).toBeDefined();
    });

    it('should return star when favorite is true', () => {
      component.favorite = true;
      expect(component.favoriteIcon).toEqual('star');
    });

    it('should return star_boder when favorite is false', () => {
      expect(component.favoriteIcon).toEqual('star_border');
    });
  });
});
