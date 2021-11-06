import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla.component';

// Material Imports
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
// Angular CDK Imports
import {ScrollingModule} from '@angular/cdk/scrolling';


@NgModule({
  declarations: [TablaComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatPaginatorModule,
    ScrollingModule

  ],
  exports: [TablaComponent]
})
export class TablaModule { }
