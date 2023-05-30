// import {ChangeDetectorRef, Component} from '@angular/core';
// import {HttpClient} from "@angular/common/http";
// import {DataService} from "../service/data.service";
// import {Observable} from "rxjs";
// import {FormBuilder, Validators} from "@angular/forms";
// import {ServisService} from "../service/servis.service";
// import {WhereAnswersRecordedService} from "../service/where-answers-recorded.service";
// // import * as string_decoder from "string_decoder";
//
// @Component({
//   selector: 'app-showcomponent',
//   templateUrl: './showcomponent.component.html',
//   styleUrls: ['./showcomponent.component.css']
// })
// export class ShowcomponentComponent {
//   amount : string = "32"
//   category : string = "32";
//   difficulty : string = "easy";//medium,""hard""
//   AnswersRecorded:any[] = [];
//   choices:string[] = ["A","B","C","D"];
//
//   apiUrl= 'https://opentdb.com/api.php?amount=' +
//     this.amount +
//     '&category=' +
//     this.category +
//     '&difficulty=' +
//     this.difficulty;
//
//   constructor(private httpp: HttpClient ,private dataService: DataService,
//              private _formBuilder: FormBuilder ,protected ServisService:ServisService,
//               private answer:WhereAnswersRecordedService)
//   {
//   }
//
//   ngDoCheck(){
//     console.log("showcompenet.ts")
//     this.degistirr()
//     // this.ServisService.getData2(this.apiUrl);
//   }
//
//   correct_answer(i:any,incorrect:any,a:string){
//
//     if ( this.ServisService.responseData[i].correct_answer == incorrect){
//       let ansewers = {"soru":i,"benim cavabım":incorrect,"doğru cevap": this.ServisService.responseData[i].correct_answer,"sonuç":true}
//       this.answer.AnswersRecord(ansewers)
//     }
//     else {
//       let ansewers = {"soru":i,"benim cavabım":incorrect,"doğru cevap": this.ServisService.responseData[i].correct_answer,"sonuç":false}
//       this.answer.AnswersRecord(ansewers)
//
//     }
//
//   }
//
//   degistirr(){
//     this.amount=this.dataService.amountt
//     this.category=this.dataService.categoryy
//     this.difficulty=this.dataService.difficultyy
//
//     this.ServisService.apiUrl= 'https://opentdb.com/api.php?amount=' +
//       this.amount +
//       '&category=' +
//       this.category +
//       '&difficulty=' +
//       this.difficulty;
//
//     this.apiUrl= this.ServisService.apiUrl
//   }
//
// }
