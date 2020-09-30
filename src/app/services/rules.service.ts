import { Injectable } from '@angular/core';
import { IRule } from '../interfaces/irule';

@Injectable({
  providedIn: 'root'
})
export class RulesService {

  private _rules: IRule[];

  public rules(): IRule[] {
    return this._rules;
  }
  constructor() { }
}
