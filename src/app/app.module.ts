import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, MatCardModule,MatIconModule,HttpClientModule],
  declarations: [ AppComponent, HeaderComponent, FormComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  


 }