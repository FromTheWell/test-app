import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import testSanitas from '../../../assets/testSanitas.json';
import { PhotoSanitasService } from '../../services/photo-sanitas.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  /**Variable global que nos carga los datos mokeados */
  public data: Photo[] = testSanitas;

  public displayedColumns: string[] = ['_id', 'photo', 'text'];

  /** Contiene los registros que se muestran en la tabla*/
  public dataSource: MatTableDataSource<any> = new MatTableDataSource();

  /** Variables del paginado */

  public pageIndex = 0;

  public pageSize = 10;
  public resultLength = 0;

  public showSearch: boolean;

  constructor(public photoSanitasService: PhotoSanitasService) {}

  ngOnInit(): void {
    this.refreshDataSource();
  }

  /** Aplica el filtro del a búsqueda al datasource */
  public applyFilter(filterValue: any) {
    console.log(filterValue);
    filterValue.target.value = filterValue.target.value.trim(); // Remove whitespace
    filterValue.target.value = filterValue.target.value.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue.target.value;
  }

  public refreshPagination(event: PageEvent): void {
    if (this.pageSize !== event.pageSize) {
      this.pageIndex = 0;
    } else {
      this.pageIndex = event.pageIndex;
    }
    this.pageSize = event.pageSize;
    this.refreshDataSource();
  }

  public refreshDataSource() {
    this.photoSanitasService.getJSON().subscribe((s) => {
      this.dataSource = new MatTableDataSource(s);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  public sortChange() {
    this.refreshDataSource();
  }
}

export interface Photo {
  _id: number;
  photo: string;
  text: string;
}
