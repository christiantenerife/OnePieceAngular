import { Component } from '@angular/core';


@Component({
  selector: 'app-sagas',
  standalone: true,
  templateUrl: './sagas.component.html',
  styleUrl: './sagas.component.css',
})
export class SagasComponent {

  sagas = [
    {
      name: 'East Blue',
      description: 'El comienzo del viaje de Luffy.',
      image: 'eastblue.jpg'
    },
    {
      name: 'Alabasta',
      description: 'Los Sombrero de Paja ayudan a Vivi a salvar su reino.',
      image: 'alabasta.jpg'
    },
    {
      name: 'Marineford',
      description: 'Una guerra decisiva entre piratas y la Marina.',
      image: 'marineford.jpg'
    }
  ];

}