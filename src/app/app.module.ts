import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { Routing, RoutedComponents } from './routings/routing';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutedComponents,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
