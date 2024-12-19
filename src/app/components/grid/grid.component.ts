import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Photo } from '../../models/photo.model';
import { PhotoService } from '../../services/photo.service';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    standalone: false
})
export class GridComponent implements OnInit {
  constructor(public photoService: PhotoService) {
    this.actualPage = 1;
  }

  public defaultImage = '../../../assets/not-found.jpg';

  public data: Photo[] = [];
  public dataCopy: Photo[] = [];

  public inputSearch = '';
  public showSearch: boolean;

  private finishPage = 100;
  private actualPage: number;

  public subscriptions: Subscription[] = [];

  ngOnInit() {
    this.refreshDataSource();
  }

  /** Función que carga los datos de las fotos */
  public refreshDataSource() {
    const photoSubscription = this.photoService
      .getJSON()
      .subscribe((s: Photo[]) => {
        this.data = s.slice(0, 40);
        this.dataCopy = s;
      });
    this.subscriptions.push(photoSubscription);
  }

  /** Función de filtrado de fotos */
  public applyFilter(filter: any) {
    const dataCopied = this.data;
    if (
      filter === undefined ||
      filter.target === undefined ||
      filter.target.value === undefined
    ) {
      return;
    }
    let filterValue = filter.target.value;
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();

    if (filterValue === '') {
      this.data = this.dataCopy.slice(0, 40);
      this.actualPage = 1;
    } else {
      this.data = dataCopied.filter(
        (x) =>
          x.text.toLocaleLowerCase().includes(filterValue) ||
          x._id.toString().includes(filterValue)
      );
    }
  }

  public trackById(index: number, item: Photo) {
    if (index === undefined || item === undefined) {
      return;
    }
    return item._id;
  }

  public add40lines() {
    if (this.data === undefined) {
      return;
    } else {
      const actualLength = this.data.length;
      this.data = this.data.concat(
        this.dataCopy.slice(actualLength, actualLength + 40)
      );
    }
  }

  public onScroll() {
    if (this.actualPage < this.finishPage) {
      this.add40lines();
      this.actualPage++;
    } else {
      console.log('No more lines. Finish page!');
      return;
    }
  }

  public onImageError(event: Event): void {
    const element = event.target as HTMLImageElement; element.src = this.defaultImage;
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
