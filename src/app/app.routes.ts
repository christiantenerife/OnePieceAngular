import { Routes } from '@angular/router';

import { SagasComponent } from './pages/sagas/sagas.component';
import { FruitsComponent } from './pages/fruits/fruits.component';
import { CharactersComponent } from './pages/characters/characters.component';

export const routes: Routes = [
  { path: 'sagas', component: SagasComponent },
  { path: 'fruits', component: FruitsComponent },
  { path: 'characters', component: CharactersComponent },
];