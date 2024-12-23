import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

// Material Imports
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';

// Angular CDK Imports
import { ScrollingModule } from '@angular/cdk/scrolling';

import { PhotoService } from '../../services/photo.service';
import { LoremIpsum } from 'lorem-ipsum';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({ declarations: [GridComponent],
    exports: [GridComponent], imports: [CommonModule,
        MatCardModule,
        MatIconModule,
        ScrollingModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        MatGridListModule,
        FormsModule,
        InfiniteScrollModule], providers: [PhotoService, LoremIpsum, provideHttpClient(withInterceptorsFromDi())] })
export class GridModule {}
