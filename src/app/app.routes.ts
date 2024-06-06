import {
  Routes
} from '@angular/router';

import {
  AppComponent
} from './app.component';
import {
  CardComponent
} from './card/card.component';

import path from 'path';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  {
    path: 'translate',
    title: 'translate',
    component: CardComponent,
  },
  {
    path: 'profile',
    title: 'profile',
    component: ProfileComponent,
  },

];
