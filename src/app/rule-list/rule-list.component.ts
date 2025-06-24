import { Component, OnInit } from '@angular/core';
import { IRule } from '../interfaces/irule';
import { RulesService } from '../services/rules.service';

@Component({
    selector: 'app-rule-list',
    templateUrl: './rule-list.component.html',
    styleUrls: ['./rule-list.component.css'],
    standalone: false
})
export class RuleListComponent implements OnInit {

  rules: IRule[] = [];
  constructor(private ruleService: RulesService) { }

  ngOnInit(): void {
    this.rules = this.ruleService.getRules();
  }

}
