import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeatureAModule } from 'projects/first-lib/src/lib/feature-a';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FeatureAModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
