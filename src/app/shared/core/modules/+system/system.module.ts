import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './sites/index/index.component';
import { ShowComponent } from './sites/show/show.component';
import { CreateComponent } from './sites/create/create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IndexComponent, ShowComponent, CreateComponent]
})
export class SystemModule { }
