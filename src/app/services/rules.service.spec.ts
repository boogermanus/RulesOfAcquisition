import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { RulesService } from './rules.service';

describe('RulesService', () => {
  let service: RulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient]
    });
    service = TestBed.inject(RulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getRules()', () => {
    it('should have method', () => {
      expect(service.getRules).toBeDefined();
    });

    it('should should have at least one rule', () => {
      const rules = service.getRules();

      expect(rules.length).toBeGreaterThan(0);
    });
  });

  describe('getRandomRule()', () => {
    it('should have method', () => {
      expect(service.getRandomRule).toBeDefined();
    });

    it('should return a rule', () => {
      const rule = service.getRandomRule();
      expect(rule).toBeTruthy();
    });
  });
});
