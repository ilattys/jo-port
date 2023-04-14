import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient,
              private messageService: MessageService
  ) { }

  contactus(data: any): Observable<any> {
    return this.http.post('http://localhost:4200/', data);
  }

  submitForm(subject, name, replyto, message) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('https://formspree.io/f/mvodpajl',
      { subject, name, replyto, message},
      { 'headers': headers }).subscribe(
      response => {
        console.log(response);
        this.log('success', 'Email Successfully Sent');
      }, error => {
        console.warn(error.responseText);
        console.log({error});
      }
    );
  }

  private log(severity: string, details: string) {
    this.messageService.add(severity, 'Danberry', details);
  }
}
