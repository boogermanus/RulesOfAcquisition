import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRule } from '../interfaces/irule';

@Injectable({
  providedIn: 'root'
})
export class RulesService {

  private _rules: IRule[];

  public rules(): IRule[] {
    return this._rules;
  }
  constructor(private httpClient: HttpClient) {
    
  }
}
