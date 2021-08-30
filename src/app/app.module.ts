import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { StudentComponent } from './student/student.component';
import { BasicinfoComponent } from './basicinfo/basicinfo.component';
import { AddressinfoComponent } from './addressinfo/addressinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    BasicinfoComponent,
    AddressinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
