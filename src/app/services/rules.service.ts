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
    return this._rules[random];
  }

  public getFavoriteRules(indices: number[]): IRule[] {
    const data: IRule[] = [];

    for (const index of indices) {
      data.push(this._rules[index]);
    }

    return data;
  }
}
