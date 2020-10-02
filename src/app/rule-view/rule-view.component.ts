import { Component, Input, OnInit } from '@angular/core';
import { IRule } from '../interfaces/irule';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-rule-view',
  templateUrl: './rule-view.component.html',
  styleUrls: ['./rule-view.component.css']
})
export class RuleViewComponent implements OnInit {

  @Input()rule: IRule;
  @Input()ruleIndex: number;
  favorite = false;

  get favoriteStyle(): any {
    return {
      color: this.favorite ? '#ef7f1a' : ''
    };
  }

  get favoriteIcon(): string {
    return this.favorite ? 'star' : 'star_border';
  }

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.favorite = this.favoritesService.isFavorite(this.ruleIndex);
  }

  onFavoriteClick() {

    if (this.favorite) {
      this.favoritesService.removeFavorite(this.ruleIndex);
    }
    else {
      this.favoritesService.addFavorite(this.ruleIndex);
    }
    this.favorite = !this.favorite;
  }

}
