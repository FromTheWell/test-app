import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Photo } from '../../models/photo.model';
import { PhotoSanitasService } from '../../services/photo-sanitas.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  constructor(public photoSanitasService: PhotoSanitasService) {}

  public data: Photo[] = [];
  public dataCopy: Photo[] = [];

  public showSearch: boolean;

  private subscriptions: Subscription[] = [];

  ngOnInit() {
    this.refreshDataSource();
  }

  public refreshDataSource() {
    const photoSubscription = this.photoSanitasService
      .getJSON()
      .subscribe((s) => {
        this.data = s;
        this.dataCopy = s;
      });
    this.subscriptions.push(photoSubscription);
  }

  public applyFilter(filter: any) {
    let filterValue = filter.target.value;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.data = this.dataCopy.filter((x) =>
      x.text.toLocaleLowerCase().includes(filterValue)
    );
  }

  public trackById(index: number, item: Photo) {
    return item._id;
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}