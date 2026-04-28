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

  featuredFruits: Fruit[] = [];
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
    this.featuredFruits = data.filter(f =>
    ['Gomu Gomu no Mi', 'Mera Mera no Mi', 'Ope Ope no Mi'].includes(f.roman_name)
  );

  this.apiFruits = data
    .filter(f =>
      !['Gomu Gomu no Mi', 'Mera Mera no Mi', 'Ope Ope no Mi'].includes(f.roman_name)
    )
    .sort((a, b) => Number(!!b.filename) - Number(!!a.filename));

  this.loading = false;
  this.cdr.detectChanges();
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

