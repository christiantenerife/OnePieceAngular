import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Fruit } from '../models/fruit.model';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {
  private api = inject(ApiService);

  getFruits(): Observable<Fruit[]> {
    return this.api.get<Fruit[]>('/fruits/en');
  }
}