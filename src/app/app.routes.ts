import { Routes } from '@angular/router';

import { SagasComponent } from './pages/sagasMain/sagas/sagas.component';
import { FruitsComponent } from './pages/fruits/fruits.component';
import { CharactersComponent } from './pages/charactersMain/characters/characters.component';
import { SagaDetailComponent } from './pages/sagasMain/saga-detail/saga-detail.component';
import { CharactersDetailComponent } from './pages/charactersMain/characters-detail/characters-detail.component';

export const routes: Routes = [
  { path: 'fruits', component: FruitsComponent },
  { path: 'characters', component: CharactersComponent },
  {path: 'sagas', component: SagasComponent},
  {path: 'sagas/:id', component: SagaDetailComponent},
  {path: 'characters/:id', component: CharactersDetailComponent}
];