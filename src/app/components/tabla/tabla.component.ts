import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import testSanitas from '../../../assets/testSanitas.json';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {



  public photoList: Photo[] = testSanitas;

  public displayedColumns: string[] = ['_id', 'photo', 'text'];

  /** Contiene los registros que se muestran en la tabla*/
  public dataSource: MatTableDataSource<any> = new MatTableDataSource(this.photoList);

  constructor() { }

  ngOnInit(): void {
  }

  /** Aplica el filtro del a búsqueda al datasource */
  public applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
}

}

export interface Photo {
  _id: string;
  photo: string;
  text: string
}
