import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import testSanitas from '../../../assets/testSanitas.json';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  public photoList: Photo[] = testSanitas;

  public displayedColumns: string[] = ['_id', 'photo', 'text'];

  /** Contiene los registros que se muestran en la tabla*/
  public dataSource: MatTableDataSource<any> = new MatTableDataSource();

      /** Variables del paginado */
@Input()
public pageIndex = 0;
@Input()
public pageSize = 10;
public resultLength = 0;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.photoList);
    this.dataSource.paginator = this.paginator;
  }

  /** Aplica el filtro del a búsqueda al datasource */
  public applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
}

public refreshPagination(event : PageEvent): void {
  if (this.pageSize !== event.pageSize) {
  this.pageIndex = 0;
} else {
  this.pageIndex = event.pageIndex;
}
this.pageSize = event.pageSize;
this.refreshDataSource();
}

public refreshDataSource(resetPage= false) {
  this.dataSource = new MatTableDataSource(this.photoList);
  this.dataSource.paginator = this.paginator


}

}



export interface Photo {
  _id: string;
  photo: string;
  text: string
}