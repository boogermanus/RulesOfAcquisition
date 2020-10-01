import { Injectable } from '@angular/core';
import { IRule } from '../interfaces/irule';
import { rules } from '../data/rules';
@Injectable({
  providedIn: 'root'
})
export class RulesService {

  private _rules: IRule[] = rules;

  constructor() {
  }

  getRules(): IRule[] {
    return this._rules;
  }

  getRandomRule(): IRule {
    const random = Math.floor(Math.random() * this._rules.length);
    return this._rules[random];
  }
}
