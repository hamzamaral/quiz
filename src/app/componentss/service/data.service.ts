import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // amountt : string = "32";
  // categoryy : string = "32";
  // difficultyy : string = "easy";
  // difficulty: any[] = ["easy","medium","hard"];
  responseData: any[] = [];

  private dataSubjectamountt = new Subject<string>();

  amount = this.dataSubjectamountt.asObservable();

  private dataSubjectcategoryy = new Subject<string>();

  category = this.dataSubjectcategoryy.asObservable();

  private dataSubjectdifficultyy = new Subject<string>();

  difficulty = this.dataSubjectdifficultyy.asObservable();

  updateamount(newData: string): void {
    this.dataSubjectamountt.next(newData);
  }

  updatecategory(newData: string): void {
    this.dataSubjectcategoryy.next(newData);
  }

  updatedifficulty(newData: string): void {
    this.dataSubjectdifficultyy.next(newData);
  }



    // updateamount(value: string) {this.amountt=value}
    //
    // updatecategory(value: string){this.categoryy=value}
    //
    // updatedifficulty(value: string) {this.difficultyy=value}

}
