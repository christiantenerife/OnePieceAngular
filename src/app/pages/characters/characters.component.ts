import { Component } from '@angular/core';


@Component({
  selector: 'app-characters',
  standalone: true,

  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent {
  characters = [
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
}