import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AlertComponent } from './alert/alert.component';
import { ThemeConfigModule } from './theme-config/theme-config.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    ThemeConfigModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
