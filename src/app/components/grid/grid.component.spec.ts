import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

import { GridComponent } from './grid.component';
import { PhotoService } from '../../services/photo.service';
import { LoremIpsum } from 'lorem-ipsum';
import { FormsModule } from '@angular/forms';
import { Photo } from '../../models/photo.model';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { By } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';

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
        InfiniteScrollModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
      ],
      declarations: [GridComponent],
      providers: [PhotoService, LoremIpsum],
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

  it('TEST 2.0: Check button and input works', () => {
    component.ngOnInit();
    fixture.detectChanges();

    const hostElement = fixture.debugElement.nativeElement;
    const btnSearch: HTMLElement = hostElement.querySelector('mat-icon');
    btnSearch.click();
    fixture.detectChanges();
    const input = hostElement.querySelector('#search-input');
    expect(input).toBeTruthy();
    input.value = 'This value';
    fixture.detectChanges();
    expect(input.value).toBe('This value');
  });

  it('TEST 2.1: Check button works', () => {
    component.ngOnInit();
    fixture.detectChanges();

    const hostElement = fixture.debugElement.nativeElement;
    const btnSearch: HTMLElement = hostElement.querySelector('mat-icon');
    expect(component.showSearch).toBeFalsy();
    btnSearch.click();
    expect(component.showSearch).toBeTruthy();
  });



  it('TEST 3.0: Check if filter has been called', () => {
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

  it('TEST 4.1: Check trackById have been called', () => {
    const spyOnTrackById = spyOn(component, 'trackById');
    const photo: Photo = new Photo(1, 'testUrl', 'test text');
    component.trackById(1, photo);
    fixture.detectChanges();
    expect(spyOnTrackById).toHaveBeenCalled();
  });

  it('TEST 4.2: Check trackById to be undefined', () => {
    const spyOnTrackById = spyOn(component, 'trackById');
    const photo: Photo = new Photo(1, 'testUrl', 'test text');
    const result = component.trackById(1, photo);
    fixture.detectChanges();
    expect(result).toBeUndefined();
    expect(spyOnTrackById).toHaveBeenCalled();
  });

  it('TEST 5.0: Check add40Lines function', () => {
    const photo: Photo = new Photo(1, 'testUrl', 'test text');
    component.data = [];
    component.dataCopy = [photo, photo];
    component.add40lines();
    expect(component.data.length).toBe(2);
  });

  it('TEST 5.1: Check add40Lines function to be Undefined', () => {
    const spyOnadd40Lines = spyOn(component, 'add40lines');
    const photo: Photo = new Photo(1, 'testUrl', 'test text');
    component.dataCopy = [photo, photo];
    component.add40lines();
    fixture.detectChanges();
    expect(component.data.length).toBe(0);
    expect(spyOnadd40Lines).toHaveBeenCalled();
  });

  it('TEST 6.0: Check onScroll function', () => {
    const spyOnadd40Lines = spyOn(component, 'add40lines');
    component.onScroll();
    expect(spyOnadd40Lines).toHaveBeenCalled();
  });

  it('TEST 7.0: Check refreshDatasource', () => {
    const spyOnRefreshDataSource = spyOn(component, 'refreshDataSource');
    component.ngOnInit();
    expect(spyOnRefreshDataSource).toHaveBeenCalled();
  });

  it('TEST 8.0: Check ngOnDestroy', () => {
    const spyOnNgOnDestroy = spyOn(component, 'ngOnDestroy');

    component.ngOnDestroy();
    fixture.detectChanges();
    expect(component.subscriptions.length).toBe(1);
    expect(spyOnNgOnDestroy).toHaveBeenCalled();
  });
});
