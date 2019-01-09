import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  maxnumber: number;
  deviation: number;
  noOfTries: number;
  original: number;
  guess: number;
  message: string;
  success: boolean;
  modal: boolean;

  constructor() {
    this.initalizeGame();
  }
  initalizeGame() {
      this.title = "Guess the Number";
      this.noOfTries = 0;
      this.maxnumber = 10;
      this.original = Math.floor((Math.random() * this.maxnumber) + 1);
      this.guess = null;
      this.deviation = null;
      this.message = null;
      this.success = false;
      this.modal = false;
  }
  verifyGuess() {
      this.deviation = this.original - this.guess;
      this.noOfTries = this.noOfTries + 1;
      if (this.deviation < 0) {
        this.message = "Your guess is higher"

      } else if (this.deviation > 0) {
        this.message = "Your guess is lower";
      } else {
        this.success = true;
        this.message = null;
      }

  }
  closeModal() {
    this.modal = false;
  }
  openModal() {
    this.modal = true;
  }

}
