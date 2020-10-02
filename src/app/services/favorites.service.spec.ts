import { TestBed } from '@angular/core/testing';

import { FavoritesService } from './favorites.service';

describe('FavoritesService', () => {
  let service: FavoritesService;
  let store = {};
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesService);

    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };

    spyOn(localStorage, 'getItem')
    .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
    .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
    .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
    .and.callFake(mockLocalStorage.clear);

    mockLocalStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getFavorites()', () => {
    it('should have method', () => {
      expect(service.getFavorites).toBeDefined();
    });

    it('should return an empty array', () => {
      const value = service.getFavorites();
      const length = value.length;
      expect(length).toBe(0);
    });

    it('should return an array with one element', () => {
      const data: number[] = [0];
      localStorage.setItem(service.KEY, JSON.stringify(data));

      const value = service.getFavorites();
      expect(value.length).toEqual(1);
    });
  });

  describe('addFavorite()', () => {
    it('should have method', () => {
      expect(service.addFavorite).toBeDefined();
    });

    it('should throw an exception if the newFavorite parameter is less than zero', () => {
      expect(() => service.addFavorite(-1)).toThrowError('newFavorite cannot be less than 0');
    });

    it('should add a new favorite', () => {
      service.addFavorite(1);
      const data = service.getFavorites();

      expect(data[0]).toEqual(1);
    });

    it('should store new favorite in localStorage', () => {
      service.addFavorite(1);
      const data = JSON.parse(localStorage.getItem(service.KEY));

      expect(data[0]).toEqual(1);
    });
  });

  describe('removeFavorite()', () => {
    it('should have method', () => {
      expect(service.removeFavorite).toBeDefined();
    });

    it('should remove an existing favorite', () => {
      service.addFavorite(1);
      service.removeFavorite(1);

      const data = service.getFavorites();

      expect(data.length).toEqual(0);
    });
  });
});
