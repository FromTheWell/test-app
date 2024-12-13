import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { HttpClientModule } from '@angular/common/http';

// Material Imports
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatGridListModule } from '@angular/material/grid-list';

// Angular CDK Imports
import { ScrollingModule } from '@angular/cdk/scrolling';

import { PhotoService } from '../../services/photo.service';
import { LoremIpsum } from 'lorem-ipsum';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [GridComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    ScrollingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    HttpClientModule,
    MatGridListModule,
    FormsModule,
    InfiniteScrollModule,
  ],
  exports: [GridComponent],
  providers: [PhotoService, LoremIpsum],
})
export class GridModule {}
