import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from './api.service';
import { Fruit } from '../models/fruit.model';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {
  private api = inject(ApiService);

  getFruits(): Observable<Fruit[]> {
    console.log('Requesting fruits from API');

    return this.api.get<Fruit[]>('/fruits/en').pipe(
      tap({
        next: (data) => console.log('Service NEXT', data.length),
        error: (err) => console.log('Service ERROR', err),
        complete: () => console.log('Service COMPLETE')
      })
    );
  }
}