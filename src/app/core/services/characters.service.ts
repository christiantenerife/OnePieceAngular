import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private api = inject(ApiService);

  getCharacters(): Observable<Character[]> {
    return this.api.get<Character[]>('/characters/en');
  }

  searchCharacters(name: string): Observable<Character[]> {
    return this.api.get<Character[]>('/characters/en/search', { name });
  }
}