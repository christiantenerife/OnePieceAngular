import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FruitsService } from '../../core/services/fruits.service';
import { Fruit } from '../../core/models/fruit.model';

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.css',
})
export class FruitsComponent implements OnInit {
  private fruitsService = inject(FruitsService);
  private cdr = inject(ChangeDetectorRef);

  featuredFruits = [
    {
      name: 'Gomu Gomu no Mi',
      user: 'Luffy',
      image: 'gomu.jpg'
    },
    {
      name: 'Mera Mera no Mi',
      user: 'Ace / Sabo',
      image: 'mera.jpg'
    },
    {
      name: 'Ope Ope no Mi',
      user: 'Trafalgar Law',
      image: 'ope.jpg'
    }
  ];

  apiFruits: Fruit[] = [];
  loading = true;
  error = '';

  ngOnInit(): void {
    this.loadFruits();
  }

loadFruits(): void {
  console.log('Component loadFruits called');

  this.loading = true;
  this.error = '';

  this.fruitsService.getFruits().subscribe({
    next: (data: Fruit[]) => {
      console.log('Component NEXT', data.length);
      this.apiFruits = data;
      this.loading = false;
      this.cdr.detectChanges();
      console.log('loading:', this.loading, 'count:', this.apiFruits.length);
    },
    error: (err) => {
      console.log('Component ERROR', err);
      this.error = 'No se pudieron cargar las frutas.';
      this.loading = false;
    },
    complete: () => {
      console.log('Component COMPLETE');
    }
  });
}
}

