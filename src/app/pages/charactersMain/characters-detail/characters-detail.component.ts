import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../../../core/services/characters.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Character } from '../../../core/models/character.model';

@Component({
  selector: 'app-characters-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characters-detail.component.html',
  styleUrl: './characters-detail.component.css',
})

export class CharactersDetailComponent {
  character$: Observable<Character | undefined>;

  constructor(
    public charactersService: CharactersService,
    private route: ActivatedRoute
  ) {
    this.character$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return this.charactersService.getCharacterById(id!);
       })
  );
    
  }
  
}
