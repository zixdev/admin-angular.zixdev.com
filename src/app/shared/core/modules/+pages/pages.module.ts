import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ShowComponent } from './show/show.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IndexComponent, ShowComponent, CreateComponent]
})
export class PagesModule { }
