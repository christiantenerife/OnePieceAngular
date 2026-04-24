import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SagasService } from '../../core/services/sagas.service';
import { Saga } from '../../core/models/saga.model';


@Component({
  selector: 'app-sagas',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./sagas.component.html',
  styleUrl: './sagas.component.css',
})
export class SagasComponent {
private sagasService = inject(SagasService);
  private cdr = inject(ChangeDetectorRef);
  
  featuredSagas = [
    {
      name: 'East Blue',
      description: 'El comienzo del viaje de Luffy.',
      image: 'eastblue.jpg',
      number: '1'
    },
    {
      name: 'Alabasta',
      description: 'Los Sombrero de Paja ayudan a Vivi a salvar su reino.',
      image: 'alabasta.jpg',
      number: '2'
    },
    {
      name: 'Saga de la Isla del Cielo',
      description: 'La búsqueda de la ciudad de oro y el enfrentamiento contra Enel.',
      image: 'marineford.jpg',
      number: '3'
    }
  ];

  apiSagas: Saga[] = [];
  loading = true;
  error = '';

  ngOnInit(): void {
    this.loadSagas();
  }

loadSagas(): void {
  console.log('Component loadSagas called');

  this.loading = true;
  this.error = '';

  this.sagasService.getSagas().subscribe({
    next: (data: Saga[]) => {
      console.log('Component NEXT', data.length);
      this.apiSagas = data;
      this.loading = false;
      this.cdr.detectChanges();
      console.log('loading:', this.loading, 'count:', this.apiSagas.length);
    },
    error: (err) => {
      console.log('Component ERROR', err);
      this.error = 'No se pudieron cargar las sagas.';
      this.loading = false;
    },
    complete: () => {
      console.log('Component COMPLETE');
    }
  });
}
}



