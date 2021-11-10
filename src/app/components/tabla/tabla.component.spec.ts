import { ScrollingModule } from '@angular/cdk/scrolling';
import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
} from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { TablaComponent } from './tabla.component';
import {
  NoopAnimationsModule,
  BrowserAnimationsModule,
} from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';

describe('TablaComponent', () => {
  let component: TablaComponent;
  let fixture: ComponentFixture<TablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatTableModule,
        MatCardModule,
        MatIconModule,
        MatPaginatorModule,
        ScrollingModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MatSortModule,
      ],
      declarations: [TablaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('TEST 1.0: Should create', () => {
    expect(component).toBeTruthy();
  });

  it('TEST 2.0: Should get the data', fakeAsync(() => {
    component.ngOnInit();
    flush();
    fixture.detectChanges();
    console.log(component.dataSource.data);
    expect(component.dataSource.data.length !== 0).toBeTruthy();
  }));
});
