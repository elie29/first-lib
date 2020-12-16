import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentAComponent } from './component-a/component-a.component';

@NgModule({
  declarations: [ComponentAComponent],
  imports: [CommonModule],
  exports: [ComponentAComponent],
})
export class FeatureAModule {}
