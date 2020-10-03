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

  public getRules(): IRule[] {
    return this._rules;
  }

  public getRandomRule(): IRule {
    const random = Math.floor(Math.random() * this._rules.length);
    const rule = this._rules[random];
    rule.ruleIndex = random;
    return rule;
  }

  public getFavoriteRules(indices: number[]): IRule[] {
    const data: IRule[] = [];

    for (const index of indices) {
      const rule = this._rules[index];
      rule.ruleIndex = index;
      data.push(rule);
    }

    return data;
  }
}
