import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FirstLibModule } from 'projects/first-lib/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FirstLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
