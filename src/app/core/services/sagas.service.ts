import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Saga } from '../models/saga.model';

@Injectable({
  providedIn: 'root'
})
export class SagasService {
  private api = inject(ApiService);

  getSagas(): Observable<Saga[]> {
    return this.api.get<Saga[]>('/sagas/en');
  }

  searchSagas(title: string): Observable<Saga[]> {
    return this.api.get<Saga[]>('/sagas/en/search', { title });
  }
}