import { Component, OnInit } from '@angular/core';
import {HomeService} from '../_Services/home.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {

  model: any = {};
  services = ['Influence', 'Model',
    'Other'];


  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
  }

  onSubmit(subject, name, replyto, message) {
   this.homeService.submitForm(subject, name, replyto, message);
  }
}


