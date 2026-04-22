import { Component } from '@angular/core';


@Component({
  selector: 'app-fruits',
  standalone: true,
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.css',
})
export class FruitsComponent {
  fruits = [
    {
      name: 'Gomu Gomu no Mi',
      user: 'Luffy',
      type: 'Poder especial / legendario',
      image: 'gomu.jpg',
    },
    {
      name: 'Mera Mera no Mi',
      user: 'Ace / Sabo',
      type: 'Logia',
      image: 'mera.jpg',
    },
    {
      name: 'Ope Ope no Mi',
      user: 'Trafalgar Law',
      type: 'Paramecia',
      image: 'ope.jpg',
    }
  ];
}