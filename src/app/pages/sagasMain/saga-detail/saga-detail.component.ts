import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ActivatedRoute } from '@angular/router';
import { SagasService } from '../../../core/services/sagas.service';
import { Saga } from '../../../core/models/saga.model';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-saga-detail',
  standalone: true,
  templateUrl: './saga-detail.component.html',
  imports: [CommonModule],
  styleUrl: './saga-detail.component.css',
})

export class SagaDetailComponent {


  saga$: Observable<Saga | undefined>;
  
  constructor(
    public sagasService: SagasService,
    private route: ActivatedRoute
  ) {
    this.saga$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return this.sagasService.getSagas().pipe(
          map(sagas => sagas.find(saga => saga.id === parseInt(id!)))
        );
      })
    );
  }
  }

