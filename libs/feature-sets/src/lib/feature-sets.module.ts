import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetListComponent } from './set-list/set-list.component';
import { SetFormComponent } from './set-form/set-form.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SetListComponent,
    SetFormComponent
  ],
  exports: [
    SetListComponent,
    SetFormComponent
  ],
})
export class FeatureSetsModule {}
