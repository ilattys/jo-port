import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<any>) { }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
