import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WhereAnswersRecordedService {

  constructor(private httpp: HttpClient ) { }
  AnswersRecorded:any[] = [];

  AnswersRecord(answer:any){
    this.AnswersRecorded.push(answer)
    console.log(this.AnswersRecorded)
  }
  m ={position: "1", name: 'Hydrogen', weight: "1.0079", symbol: 'H'}
}
