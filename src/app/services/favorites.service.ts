import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private _favorites: number[] = [];
  public readonly KEY = 'SavedRules';
  constructor() { }

  public getFavorites(): number[] {

    const storage = localStorage.getItem(this.KEY);

    if(storage === null)
      return [];

    const data = JSON.parse(storage);

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
    this.saveFavorites();
  }

  private saveFavorites(): void {
    localStorage.setItem(this.KEY, JSON.stringify(this._favorites));
  }

  public removeFavorite(favorite: number): void {
    const index = this._favorites.findIndex(f => f === favorite);

    if (index !== -1) {
      this._favorites.splice(index, 1);
    }

    this.saveFavorites();
  }

  public isFavorite(favorite: number): boolean {
    return this._favorites.findIndex(f => f === favorite) !== -1;
  }
}
