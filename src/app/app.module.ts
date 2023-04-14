import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ToastModule } from 'primeng/toast';
import { MessageService as PrimeMessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog'

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ConnectComponent } from './connect/connect.component';
import { HomeComponent } from './home/home.component';
import { LearnComponent } from './learn/learn.component';
import { MessagesComponent } from './messages/messages.component';
import { ShopComponent } from './shop/shop.component';
import { NewsletterComponent } from './newsletter/newsletter.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ConnectComponent,
    HomeComponent,
    LearnComponent,
    MessagesComponent,
    ShopComponent,
    NewsletterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    MDBBootstrapModule.forRoot(),
    MatDialogModule
  ],
  entryComponents: [NewsletterComponent],
  providers: [PrimeMessageService, NewsletterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
