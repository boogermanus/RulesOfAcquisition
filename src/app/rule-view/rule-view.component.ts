import { Component, Input, OnInit } from '@angular/core';
import { IRule } from '../interfaces/irule';

@Component({
  selector: 'app-rule-view',
  templateUrl: './rule-view.component.html',
  styleUrls: ['./rule-view.component.css']
})
export class RuleViewComponent implements OnInit {

  @Input() rule: IRule;
  favorite = false;

  get favoriteStyle(): any {
    return {
      color: this.favorite ? '#ef7f1a' : ''
    };
  }

  get favoriteIcon(): string {
    return this.favorite ? 'star' : 'star_border';
  }
  constructor() { }

  ngOnInit(): void {
  }

  onStarClick() {
    this.favorite = !this.favorite;
  }

}
