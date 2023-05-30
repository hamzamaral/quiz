import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Observable, of } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  position: number;
  name: string;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-deneme',
  templateUrl: './deneme.component.html',
  styleUrls: ['./deneme.component.css']
})
export class DenemeComponent {


  // @ViewChild(MatTable) table: MatTable<any> | undefined;
  @ViewChild(MatTable, {static: false}) table: MatTable<any> | undefined;


  ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.81, symbol: 'B'},
  ];

  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  getresult(): Observable<PeriodicElement[]> {
    // Burada API'den veri alımı yapılabilir veya örnek bir veri seti döndürebilirsiniz
    return of([
      {position: 6, name: 'Carbon', weight: 12.011, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.007, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.999, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.998, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.18, symbol: 'Ne'},
    ]);
  }

  getresults(): Observable<PeriodicElement[]> {
    // Burada API'den veri alımı yapılabilir veya örnek bir veri seti döndürebilirsiniz

    let a=of([
      {position: 61, name: 'Carbon', weight: 12.011, symbol: 'C'},
      {position: 71, name: 'Nitrogen', weight: 14.007, symbol: 'N'},
      {position: 18, name: 'Oxygen', weight: 15.999, symbol: 'O'},
      {position: 19, name: 'Fluorine', weight: 18.998, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.18, symbol: 'Ne'},
    ]);
    return a
  }

  resultss() {
    this.getresults().subscribe(data => {
      this.dataSource.data = data;

      this.table.renderRows();
    });
  }
  resultss2() {
    this.getresult().subscribe(data => {
      this.dataSource.data = data;

      this.table.renderRows();
    });
  }
}
