import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersService } from '../../../core/services/characters.service';
import { Subject, of } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  catchError,
  map
} from 'rxjs/operators';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent {
  private charactersService = inject(CharactersService);

  
  // API search results
  private searchTerms = new Subject<string>();

searchResults$ = this.searchTerms.pipe(
  map(term => term.trim()),
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(value => {
    if (!value) {
      return of([]);  // Return empty array, no need to set loading
    }
    return this.charactersService.searchCharacters(value).pipe(
      catchError(() => {
        return of([]); // Return empty on error
      })
    );
  })
);
error: any;
loading: any;
results: any;


onSearch(term: string): void {
  this.searchTerms.next(term);
}}