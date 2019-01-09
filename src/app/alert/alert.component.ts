import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input('message') message: string;
  @Input('status') status: string;
  @Input('warning') warning: boolean;
  @Input('success') success: boolean;
  constructor() {
    this.message = null;
    this.status = null;
    this.warning = null;
    this.success = null;
  }


  ngOnInit() {
  }

}
