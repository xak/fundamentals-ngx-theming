import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-theme-config',
  templateUrl: './theme-config.component.html',
  styleUrls: ['./theme-config.component.scss']
})
export class ThemeConfigComponent implements OnInit {
  actionColor;
  shellColor;
  textColor;
  backgroundColor;

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.actionColor = this.getCssVar('--fd-color-action-1');
    this.shellColor = this.getCssVar('--fd-color-shell-1');
    //this.textColor = this.getCssVar('--fd-color-text-2');
    this.backgroundColor = this.getCssVar('--fd-color-background-1');
  }

  save(event) {
    if (this.actionColor) {
      document.documentElement.style.setProperty('--fd-color-action-1', this.actionColor);
    //  document.documentElement.style.setProperty(`--primary-darken`, this.lightenColor(this.primaryColor, -15));
      console.log(this.getCssVar('--primary-color'));
    }
    if (this.shellColor) {
      document.documentElement.style.setProperty('--fd-color-shell-1', this.shellColor);
    //  document.documentElement.style.setProperty(`--secondary-darken`, this.lightenColor(this.secondaryColor, -15));
    }
    // if (this.textColor) {
    //   //document.documentElement.style.setProperty('--fd-color-text-1', this.textColor);
    //   document.documentElement.style.setProperty('--fd-color-text-2', this.textColor);
    //   //document.documentElement.style.setProperty('--fd-color-text-3', this.textColor);
    // //  document.documentElement.style.setProperty(`--secondary-darken`, this.lightenColor(this.secondaryColor, -15));
    // }
    if (this.backgroundColor) {
      document.documentElement.style.setProperty('--fd-color-background-1', this.backgroundColor);
    //  document.documentElement.style.setProperty(`--secondary-darken`, this.lightenColor(this.secondaryColor, -15));
    }
  }

  getCssVar(name: string) {
    const bodyStyles = window.getComputedStyle(document.body);
    let value = bodyStyles.getPropertyValue(name).trim();
    // in case this is a string, we need to get ride of the quotes
    value = value.replace(/"/g, '');
    return value;
  }

  private lightenColor(color, percent) {
    color = color.trim().slice(1);

    var num = parseInt(color, 16),
      amt = Math.round(2.55 * percent),
      R = (num >> 16) + amt,
      B = ((num >> 8) & 0x00ff) + amt,
      G = (num & 0x0000ff) + amt;
    if (!num) {
      console.error('could not transform the color', color, num);
      return color;
    }
    const value = (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
      (G < 255 ? (G < 1 ? 0 : G) : 255)
    )
      .toString(16)
      .slice(1);
    return '#' + value;
  }
}
