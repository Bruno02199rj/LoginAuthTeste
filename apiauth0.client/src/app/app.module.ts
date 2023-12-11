import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent
   
   
  
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, RouterModule,
    AppRoutingModule, CommonModule,ReactiveFormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],

})
export class AppModule { }
