import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { IRule } from '../interfaces/irule';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-rule-view',
  templateUrl: './rule-view.component.html',
  styleUrls: ['./rule-view.component.css']
})
export class RuleViewComponent implements OnInit, OnChanges {

  @Input()rule: IRule = {
    source: "",
    number: 0,
    rule: "",
  };
  @Input()ruleIndex: number = 0;
  @Output()ruleRemoved: EventEmitter<any> = new EventEmitter();
  favorite = false;

  get favoriteStyle(): any {
    return {
      color: this.favorite ? '#ef7f1a' : ''
    };
  }

  get favoriteIcon(): string {
    return this.favorite ? 'star' : 'star_border';
  }

  get favoriteTooltip(): string {
    return this.favorite ? 'Remove favorite' : 'Add favorite';
  }
  constructor(private favoritesService: FavoritesService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.favorite = this.favoritesService.isFavorite(this.ruleIndex);
  }

  onFavoriteClick() {

    if (this.favorite) {
      this.favoritesService.removeFavorite(this.ruleIndex);
      this.ruleRemoved.emit();
    }
    else {
      this.favoritesService.addFavorite(this.ruleIndex);
    }
    this.favorite = !this.favorite;
  }

}
