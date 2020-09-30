import { TestBed } from '@angular/core/testing';

import { RulesService } from './rules.service';

describe('RulesService', () => {
  let service: RulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have rules', () => {
    expect(service.rules).toBeDefined();
  });

  // describe('rules', () => {
  //   it('should have length greater than zero')
  // })
});
