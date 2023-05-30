import {ChangeDetectorRef, Component, SimpleChanges} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataService} from "../service/data.service";
import {Observable, of} from "rxjs";
import {FormBuilder, Validators} from "@angular/forms";
import {ServisService} from "../service/servis.service";
import {WhereAnswersRecordedService} from "../service/where-answers-recorded.service";
import {ApiService} from "../service/api.service";
import {ToggleService} from "../service/toggle.service";


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {
  // amount : string = "32"
  // category : string = "32";
  // difficulty : string = "easy";//medium,""hard""
  // AnswersRecorded:any[] = [];
  // choices:string[] = ["A","B","C","D"];
  //
  // apiUrl= 'https://opentdb.com/api.php?amount=' +
  //   this.amount +
  //   '&category=' +
  //   this.category +
  //   '&difficulty=' +
  //   this.difficulty;
  //
  // constructor(private httpp: HttpClient ,private dataService: DataService,
  //             private _formBuilder: FormBuilder ,protected ServisService:ServisService,
  //             private answer:WhereAnswersRecordedService)
  // {
  // }
  //
  // ngDoCheck(){
  //   console.log("showcompenet.ts")
  //   this.degistirr()
  //   // this.ServisService.getData2(this.apiUrl);
  // }
  //
  // correct_answer(i:any,incorrect:any,a:string){
  //
  //   if ( this.ServisService.responseData[i].correct_answer == incorrect){
  //     let ansewers = {"soru":i,"benim cavabım":incorrect,"doğru cevap": this.ServisService.responseData[i].correct_answer,"sonuç":true}
  //     this.answer.AnswersRecord(ansewers)
  //   }
  //   else {
  //     let ansewers = {"soru":i,"benim cavabım":incorrect,"doğru cevap": this.ServisService.responseData[i].correct_answer,"sonuç":false}
  //     this.answer.AnswersRecord(ansewers)
  //
  //   }
  //
  // }
  //
  // degistirr(){
  //   this.amount=this.dataService.amountt
  //   this.category=this.dataService.categoryy
  //   this.difficulty=this.dataService.difficultyy
  //
  //   this.ServisService.apiUrl= 'https://opentdb.com/api.php?amount=' +
  //     this.amount +
  //     '&category=' +
  //     this.category +
  //     '&difficulty=' +
  //     this.difficulty;
  //
  //   this.apiUrl= this.ServisService.apiUrl
  // }

  data: string = '';
  amount : string = "32"
  category : string = "32";
  difficulty : string = "easy";//medium,""hard""
  responseData: any[] = [];
  responseData2: any[] = [];
  responseData3: any[] = [];
  choosingstring = ["A","B","C","D"];
  isim :string = "hamza"
  soyisim :string = "maral"
  numara :string="1";
  isimSoyisimNumara:string= this.isim+this.soyisim+this.numara;
  toggleexam: boolean=true;

  constructor(private httpp: HttpClient ,private dataService: DataService,
              private _formBuilder: FormBuilder ,private ServisService:ServisService,
              private answer:WhereAnswersRecordedService,private cdr: ChangeDetectorRef,private setapi:ApiService,private ToggleService:ToggleService)
  {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['responseData']) {
      // Değişken değiştiğinde yapılacak işlemler burada gerçekleştirilir
      console.log('myVariable değişti:', this.responseData);
    }
  }

  ngOnInit(): void {
    // console.log("ngOnInitquestion")
    this.dataService.amount.subscribe((newData) => {
      this.amount = newData;
      // console.log("questionngonıt")
    });

    this.dataService.category.subscribe((newData) => {
      this.category = newData;
      // console.log("questionngonıt")
    });
    this.dataService.difficulty.subscribe((newData) => {
      this.difficulty = newData;
      // console.log("questionngonıt")
    });
    this.ServisService.responseData.subscribe((newData) => {
      this.responseData = newData;
      this.responseData2 = [];
      for (let i = 0; i < this.responseData.length; i++) {
        const options =[...this.responseData[i].incorrect_answers, this.responseData[i].correct_answer]
        this.responseData2.push(options)
      }

      console.log(this.responseData2)
      console.log( this.responseData.length)
    });
    this.setapi.isim.subscribe((newData) => {
      this.isim = newData;
    });
    this.setapi.soyisim.subscribe((newData) => {
      this.soyisim = newData;
    });
    this.setapi.numara.subscribe((newData) => {
      this.numara = newData;
    });
    this.ToggleService.toggleexam.subscribe((newData) => {
      this.toggleexam = newData;
      this.responseData = []

      // if(this.toggleexam==false){
      //   this.responseData = []
      // }

    });
  }
  // deneme(): void {
  //   console.log("ngOnInitquestion")
  //   this.dataService.amount.subscribe((newData) => {
  //     this.amount = newData;
  //   });
  //   this.dataService.category.subscribe((newData) => {
  //     this.category = newData;
  //   });
  //   this.dataService.difficulty.subscribe((newData) => {
  //     this.difficulty = newData;
  //   });
  //   this.ServisService.responseData.subscribe((newData) => {
  //     this.responseData = newData;
  //   });
  // }

  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     this.cdr.detectChanges();
  //   });
  // }

  ngAfterViewInit() {

  }

  shuffleOptions(response: any): any {

    const options =[...response.incorrect_answers, response.correct_answer]
    // console.log(options)
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
  }

  choosing(correct_answer:string,option:string,choice:string,i:number,isimSoyisimNumara:string){
    // console.log(isimSoyisimNumara)
    this.isimSoyisimNumara = this.isim+this.soyisim+this.numara
    // let isimSoyisimNumaras = isimSoyisimNumara
    let answers = {"soru":i+1,"doğru cevap":correct_answer,"benim cevabım":option }
    this.httpp.post("https://ng-shopapp-3666b-default-rtdb.firebaseio.com/answers/" +this.isimSoyisimNumara + ".json",answers ).subscribe(data => console.log());
  }

  // shuffleOptions(response: any): { letter: string, option: string }[] {
  //   const options = [...response.incorrect_answers, response.correct_answer];
  //   const shuffledOptions = [];
  //   const letters = ['A', 'B', 'C', 'D'];
  //   for (let i = 0; i < options.length; i++) {

  //     const shuffledOption = {
  //       letter: letters[i],
  //       option: options[i]
  //     };
  //     shuffledOptions.push(shuffledOption);
  //   }
  //   // Seçenekleri karıştır
  //   for (let i = shuffledOptions.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
  //   }
  //   return shuffledOptions;
  // }

}
