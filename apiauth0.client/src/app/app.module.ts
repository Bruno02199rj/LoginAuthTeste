import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersService } from './users.service';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, CommonModule,ReactiveFormsModule
  ],
  providers: [HttpClientModule, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
