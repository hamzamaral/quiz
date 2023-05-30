import {Injectable, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {DataService} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class ServisService  {

  toggle: boolean= true;
  toggles(){
    this.toggle=!this.toggle

  }


  constructor(private httpp: HttpClient , private dataService: DataService) {}
  // open : boolean = true;
  amount :string = "3"
  category :string = "9"
  difficulty :string = "easy"
  // responseData: any[] = [];

  //
  private responseDatasubject = new Subject<any[]>();

  responseData = this.responseDatasubject.asObservable();

  updateData(newData: any[]): void {
    this.responseDatasubject.next(newData);
  }

  //
  // ngOnInit(): void {
  //   console.log("servisengOnInit")
  //   this.dataService.amount.subscribe((newData) => {
  //     this.amount = newData;
  //     console.log(this.amount)
  //   });
  //   this.dataService.category.subscribe((newData) => {
  //     this.category = newData
  //     console.log(this.category)
  //
  //   });
  //   this.dataService.difficulty.subscribe((newData) => {
  //     this.difficulty = newData
  //     console.log(this.difficulty)
  //
  //   });
  // }

  updateapi(): void {
    console.log("servisengOnInit")
    this.dataService.amount.subscribe((newData) => {
      this.amount = newData;
      // console.log("servis.updateapi"+ this.amount)
    });
    this.dataService.category.subscribe((newData) => {
      this.category = newData
      // console.log("servis.updateapi"+ this.category)

    });
    this.dataService.difficulty.subscribe((newData) => {
      this.difficulty = newData
      // console.log("servis.updateapi"+this.difficulty)

    });
  }


    // this.dataService.amount.subscribe((newData) => {
    //   this.amount = newData;
    // });
    // this.dataService.category.subscribe((newData) => {
    //   this.category = newData;
    // });
    // this.dataService.difficulty.subscribe((newData) => {
    //   this.difficulty = newData;
    // });
    // this.ServisService.responseData.subscribe((newData) => {
    //   this.responseData = newData;
    // });


  // ngDoCheck(){
  //   console.log("console.yts")
  //   this.amount = this.dataService.amountt
  //   this.category = this.dataService.categoryy
  //   this.difficulty = this.dataService.difficultyy
  //
  //   this.apiUrl= 'https://opentdb.com/api.php?amount=' +
  //     this.amount +
  //     '&category=' +
  //     this.category +
  //     '&difficulty=' +
  //     this.difficulty;
  // }

  apiUrl= 'https://opentdb.com/api.php?amount=' +
    this.amount +
    '&category=' +
    this.category +
    '&difficulty=' +
    this.difficulty;

  // getData() {
  //   this.apiUrl= 'https://opentdb.com/api.php?amount=' +
  //     this.amount +
  //     '&category=' +
  //     this.category +
  //     '&difficulty=' +
  //     this.difficulty;
  //   this.httpp.get(this.apiUrl).subscribe(
  //     (response: any) => {
  //       this.responseData = response.results
  //       this.updateDatas(response.results);
  //          },
  //     (error: any) => {
  //       console.log('Hata:', error);
  //     },
  //     () => {
  //       // Observable tamamlandığında yapılacak işlemler burada yapılır
  //     }
  //   );
  //
  //
  //
  //   this.httpp.get(this.apiUrl).subscribe((response: any) => {
  //     this.responseData = response.results
  //     this.updateDatas(response.results);
  //
  //   }, error => {
  //     console.log('Hata:', error);
  //   });
  // }

  getData() {
    this.apiUrl= 'https://opentdb.com/api.php?amount=' +
      this.amount +
      '&category=' +
      this.category +
      '&difficulty=' +
      this.difficulty;

    this.httpp.get(this.apiUrl).subscribe((response: any) => {
      // this.responseData = response.results;
      // this.updateData(response.results)
      this.responseData = response.results
      this.updateDatas(response.results);
      // console.log("getdata"+this.amount)
      // console.log("getdata"+this.category)
      // console.log("getdata"+this.difficulty)
      // this.updateDatas(response.results);
      // let a = this.updateData(response.results)

      // console.log(typeof(response.results))
      // console.log(response.results)
      // console.log("result"+this.responseData)
      // return this.responseData
      // console.log(this.responseData[1]); // İçeriğe erişim
    }, error => {
      console.log('Hata:', error);
    });
  }



  updateDatas(a:any[]) {
    this.updateData(a);
  }


  // getData2(api:string) {
  //   this.httpp.get(api).subscribe((response: any) => {
  //     this.responseData = response.results;
  //     console.log(response.results);
  //     // console.log(this.responseData[1]); // İçeriğe erişim
  //   }, error => {
  //     console.log('Hata:', error);
  //   });
  // }



}
