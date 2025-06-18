import { Component, OnInit } from '@angular/core';
import { IRule } from '../interfaces/irule';
import { FavoritesService } from '../services/favorites.service';
import { RulesService } from '../services/rules.service';

@Component({
    selector: 'app-rule-favorites',
    templateUrl: './rule-favorites.component.html',
    styleUrls: ['./rule-favorites.component.css'],
    standalone: false
})
export class RuleFavoritesComponent implements OnInit {

  public favorites: IRule[] = [];
  public hasFavorites = false;
  constructor(private rulesService: RulesService,
              private favoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.getFavorites();
  }

  public getFavorites(): void {
    const favorites = this.favoritesService.getFavorites();
    this.favorites = this.rulesService.getFavoriteRules(favorites);
    this.hasFavorites = this.favorites.length > 0;
  }
}
