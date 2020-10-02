import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private _favorites: number[] = [];
  public readonly KEY = 'SavedRules';
  constructor() { }

  public getFavorites(): number[] {

    const data = JSON.parse(localStorage.getItem(this.KEY));

    if (data !== null) {
      this._favorites = data;
    }

    return this._favorites;
  }

  public addFavorite(newFavorite: number): void {
    if (newFavorite < 0) {
      throw Error('newFavorite cannot be less than 0');
    }

    this._favorites.push(newFavorite);
    localStorage.setItem(this.KEY, JSON.stringify(this._favorites));
  }

  public removeFavorite(newFavorite: number): void {

  }
}
