import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-guess-panel',
  templateUrl: './guess-panel.component.html',
  styleUrls: ['./guess-panel.component.scss']
})
export class GuessPanelComponent implements OnInit {
  @Input('noOfTries') noOfTries: number;

  constructor() {
      this.noOfTries = 0
  }

  ngOnInit() {
  }

}
