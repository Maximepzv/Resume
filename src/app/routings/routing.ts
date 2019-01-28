import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../components/app/app.component';
import { HomeComponent } from '../components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export const Routing = RouterModule.forRoot(routes);
export const RoutedComponents = [AppComponent, HomeComponent];
