import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

import { GridComponent } from './grid.component';
import { PhotoSanitasService } from '../../services/photo-sanitas.service';
import { LoremIpsum } from 'lorem-ipsum';
import { flush, fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Photo } from '../../models/photo.model';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
        FlexLayoutModule,
        FormsModule,
      ],
      declarations: [GridComponent],
      providers: [PhotoSanitasService, LoremIpsum],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('TEST 1.0: Should create component', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('TEST 2.0: Check button and input works', () => {
    component.ngOnInit();
    fixture.detectChanges();

    const hostElement = fixture.debugElement.nativeElement;
    const btnSearch: HTMLElement = hostElement.querySelector('mat-icon');
    btnSearch.click();
    expect(hostElement.querySelector('input')).toBeNull();
  });

  it('TEST 3.0: Check if filter works', () => {
    const spyOnApplyFilter = spyOn(component, 'applyFilter');
    component.applyFilter('hola to filter');
    fixture.detectChanges();
    expect(spyOnApplyFilter).toHaveBeenCalled();
    expect(component.data.length).toBe(0);
  });

  it('TEST 4.0: Check trackById function', () => {
    const photo: Photo = new Photo(1, 'testUrl', 'test text');
    const result = component.trackById(1, photo);
    expect(result).toBe(1);
  });

  // it('TEST 2.0: Should get the data', async(() => {
  //   component.ngOnInit();
  //   fixture.detectChanges();
  //   console.log(component.data);
  //   expect(component.data.length !== 0).toBeTruthy();
  // }));

  // it('TEST 2.1: Grid with data', () => {
  //   component.ngOnInit();
  //   fixture.detectChanges();
  //   const image: HTMLElement =
  //     fixture.nativeElement.querySelector('.mat-card-image');

  //   expect(image).toBeTruthy();
  // });
});
