import { Component, OnInit } from '@angular/core';
import { IRule } from '../interfaces/irule';
import { RulesService } from '../services/rules.service';

@Component({
  selector: 'app-rule-generator',
  templateUrl: './rule-generator.component.html',
  styleUrls: ['./rule-generator.component.css']
})
export class RuleGeneratorComponent implements OnInit {

  rule: IRule = {
    number: 0,
    rule: '',
    source: '',
  };

  constructor(private rulesService: RulesService) { }

  ngOnInit(): void {
    this.rule = this.rulesService.getRandomRule();
  }

  random(): void {
    this.rule = this.rulesService.getRandomRule();
  }
}
