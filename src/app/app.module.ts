import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './routes/homeroutes'
import { HomeComponent } from './components/home/home.component';
import { CarouselModule } from 'ngx-bootstrap';
import { HomeModule } from './components/home/homemodule';
import { NavbarComponent } from './components/home/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
],
  imports: [
    CarouselModule.forRoot(),
    NgbModule.forRoot(),
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
