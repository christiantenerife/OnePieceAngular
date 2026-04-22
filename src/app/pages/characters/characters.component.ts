import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersService } from '../../core/services/characters.service';
import { Character } from '../../core/models/character.model';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent {

  private charactersService = inject(CharactersService);

  // Your existing characters with pictures
  featuredCharacters = [
    {
      name: 'Monkey D. Luffy',
      role: 'Captain',
      description: '¡Yo seré el rey de los piratas!',
      image: 'luffy.jpg'
    },
    {
      name: 'Roronoa Zoro',
      role: 'Swordsman',
      description: 'Mejor espadachín del mundo.',
      image: 'zoro.jpg'
    },
    {
      name: 'Nami',
      role: 'Navigator',
      description: 'La experta navegante de la tripulación del Sombrero de Paja.',
      image: 'nami.jpg'
    }
  ];

  // API search results
  searchResults: Character[] = [];

  loading = false;
  error = '';

  onSearch(term: string): void {

    const value = term.trim();

    if (!value) {
      this.searchResults = [];
      this.error = '';
      return;
    }

    this.loading = true;
    this.error = '';

    this.charactersService.searchCharacters(value).subscribe({
      next: (data) => {
        this.searchResults = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to search characters.';
        this.loading = false;
      }
    });

  }

}