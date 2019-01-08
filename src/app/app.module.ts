import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ServicesComponent } from './services/services.component';
import { ContractsComponent } from './contracts/contracts.component';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      HomeComponent,
      NewsComponent,
      ServicesComponent,
      ContractsComponent
   ],
   imports: [
      BrowserModule,
      MDBBootstrapModule.forRoot(),
      AppRoutingModule
   ],
   schemas: [
      NO_ERRORS_SCHEMA
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
