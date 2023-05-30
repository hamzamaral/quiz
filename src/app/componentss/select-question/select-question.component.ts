import {ChangeDetectorRef, Component, EventEmitter, Output} from '@angular/core';
import {DataService} from "../service/data.service";
import {HttpClient} from "@angular/common/http";
import {ServisService} from "../service/servis.service";
import {selectquestionvariable} from "../model/selectquestionvariables";
import {ToggleService} from "../service/toggle.service";

@Component({
  selector: 'app-select-question',
  templateUrl: './select-question.component.html',
  styleUrls: ['./select-question.component.css']
})



export class SelectQuestionComponent implements selectquestionvariable {
  amount : string = "32";
  category : string = "32";
  difficulty : string = "medium";
  categoriess : string = "General Knowledge";
  difficultyy :  any[] = ["easy","medium","hard"];
  // any[] = ["easy","medium","hard"];
  responseData: any[] = [];
  toggle:boolean=false;
   categories:string[] = [
    "Entertainment: Cartoon & Animations",
    "Entertainment: Japanese Anime & Manga",
    "Entertainment: Comics",
    "Vehicles",
    "History",
    "Geography",
    "Sports",
    "Science: Computers",
    "Science & Nature",
    "Entertainment: Video Games",
    "Entertainment: Television",
    "Entertainment: Music",
    "Entertainment: Film",
    "Entertainment: Books",
    "General Knowledge"
  ];





  constructor(private  dataService:DataService,private httpp: HttpClient,
              private cdRef: ChangeDetectorRef,private ServisServicess:ServisService,private ToggleService:ToggleService
  ) {}


  updateData(value:string,value2:string,value3:string): void {
    const newData = value;
    this.dataService.updateamount(newData);
    const newData1 = value2
    this.dataService.updatecategory(newData1);
    const newData2 = value3
    this.dataService.updatedifficulty(newData2);
    this.ServisServicess.updateapi()


    // const newData = 'Yeni veri';
    // this.dataService.updateData(newData);
  }

  // updateData2(value:string): void {
  //   const newData = this.category;
  //   this.dataService.updatecategory(newData);
  //
  // }


  // ngDoCheck(){
  //
  // }

  get(){
    this.ServisServicess.updateapi()

    this.updateData(this.amount,this.category,this.difficulty)
    this.ServisServicess.getData()
    this.toggle=!this.toggle
  }

  finishTheExam(){
    this.ToggleService.updateDatatoggleexam()
    this.toggle=!this.toggle
  }
  onCategorySelect(event: any) {
    const selectedCategory = event.value;
    for (let i = 0; i < this.categories.length; i++) {
        if (this.categories[0] == selectedCategory){
          this.category="32"
      }
      if (this.categories[1] == selectedCategory){
        this.category="31"
      }
      if (this.categories[2] == selectedCategory){
        this.category="29"
      }
      if (this.categories[3] == selectedCategory){
        this.category="28"
      }
      if (this.categories[4] == selectedCategory){
        this.category="23"
      }
      if (this.categories[5] == selectedCategory){
        this.category="22"
      }
      if (this.categories[6] == selectedCategory){
        this.category="21"
      }
      if (this.categories[7] == selectedCategory){
        this.category="18"
      }
      if (this.categories[8] == selectedCategory){
        this.category="17"
      }
      if (this.categories[9] == selectedCategory){
        this.category="15"
      }
      if (this.categories[10] == selectedCategory){
        this.category="14"
      }
      if (this.categories[11] == selectedCategory){
        this.category="12"
      }
      if (this.categories[12] == selectedCategory){
        this.category="11"
      }
      if (this.categories[13] == selectedCategory){
        this.category="10"
      }
      if (this.categories[14] == selectedCategory){
        this.category="9"
      }

    }

    //
    // // Seçilen kategori ile ilgili işlemleri burada gerçekleştirebilirsiniz
    // console.log('Seçilen kategori: ', event);
    // console.log('Seçilen kategori: ', event.value);
  }



}
