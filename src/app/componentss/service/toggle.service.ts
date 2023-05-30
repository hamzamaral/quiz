import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ServisService} from "./servis.service";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  constructor(private httpp: HttpClient ) { }
  togglee: boolean= true;
  toggleexams: boolean= true;

  private dataSubjecttoggle = new Subject<any>();

  toggle = this.dataSubjecttoggle.asObservable();

  updateDatatoggle(): void {
    this.togglee = !this.togglee
    this.dataSubjecttoggle.next(this.togglee);
  }

  private dataSubjecttoggleexam = new Subject<any>();

  toggleexam = this.dataSubjecttoggleexam.asObservable();

  updateDatatoggleexam(): void {
    this.toggleexams = !this.toggleexams
    this.dataSubjecttoggleexam.next(this.toggleexams);
  }

  panelOpenState = false;
  toggles()
  {
    // this.toggle = !this.toggle

  }
  // private dataSubject = new Subject<string>();
  //
  // data$ = this.dataSubject.asObservable();
  //
  // updateData(newData: string): void {
  //   this.dataSubject.next(newData);
  // }

}
