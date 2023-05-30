import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // isim :string = "hamza";
  // soyisim :string = "maral";
  // numara :string="2";
  // isimSoyisimNumara:string= this.isim+this.soyisim+this.numara

  private dataSubjectisim = new Subject<string>();

  isim = this.dataSubjectisim.asObservable();
  updateDataisim(newData: string): void {
    this.dataSubjectisim.next(newData);
  }


  private dataSubjectsoyisim = new Subject<string>();

  soyisim = this.dataSubjectsoyisim.asObservable();
  updateDatasoyisim(newData: string): void {
    this.dataSubjectsoyisim.next(newData);
  }


  private dataSubjectsoynumara = new Subject<string>();

  numara = this.dataSubjectsoynumara.asObservable();


  updateDatanumara(newData: string): void {
    this.dataSubjectsoynumara.next(newData);
  }
}
