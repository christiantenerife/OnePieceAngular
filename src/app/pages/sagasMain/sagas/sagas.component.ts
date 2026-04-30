import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SagasService } from '../../../core/services/sagas.service';
import { Saga } from '../../../core/models/saga.model';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-sagas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl:'./sagas.component.html',
  styleUrl: './sagas.component.css',
})
export class SagasComponent {
private sagasService = inject(SagasService);
  private cdr = inject(ChangeDetectorRef);
  
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



