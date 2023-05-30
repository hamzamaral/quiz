import {ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, map, Observable, tap} from "rxjs";
import {WhereAnswersRecordedService} from "../service/where-answers-recorded.service";
import {MatTable} from "@angular/material/table";
import {ApiService} from "../service/api.service";
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";
// export interface PeriodicElement {
//   name: string;
//   position: string;
//   weight: string;
//   symbol: string;
// }

export interface result {
  soru: string;
  isim: string;
  soyisim: string;
  numara: string;
  dogruCevap: string;
  benimCevabim: string;
  category: string;
  difficulty: string;
  type: string;
}


// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: "1", name: 'Hydrogen', weight: "1.0079", symbol: 'H'},
//   {position: "2", name: 'Helium', weight: "4.0026", symbol: 'He'},
//   {position: "3", name: 'Lithium', weight:" 6.941", symbol: 'Li'},
//   {position: "4", name: 'Beryllium', weight: "9.0122", symbol: 'Be'},
//   {position: "5", name: 'Boron', weight: "10.811", symbol: 'B'},
//   {position:" 6", name: 'Carbon', weight: "12.0107", symbol: 'C'},
//   {position: "7", name: 'Nitrogen', weight: "14.0067", symbol: 'N'},
//   {position: "8", name: 'Oxygen', weight: "15.9994", symbol: 'O'},
//   {position: "9", name: 'Fluorine',weight: "18.9984", symbol: 'F'},
//   {position: "10", name: 'Neon', weight: "20.1797", symbol: 'Ne'},
// ];


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  @ViewChild(MatTable, {static: false}) table: MatTable<any> | undefined;
  isim :string = "hamza"
  soyisim :string = "maral"
  numara :string="1";
  isimSoyisimNumara:string= this.isim+this.soyisim+this.numara;
  resultTable:any[]=[
    {soru:"1",isim: "hamza",soyisim:"maral",numara:"1",
      dogruCevap:"true",benimCevabim:"benimCevabım",category:"category",
      difficulty:"difficulty",type:"type"},
  ];
  resultTablelist:any[]= []
  displayedColumnsresult: string[] = ['soru', 'isim',
    'soyisim', 'numara','dogruCevap', 'benimCevabim',"category",
    "difficulty","type" ];
   url = "https://ng-shopapp-3666b-default-rtdb.firebaseio.com/answers/" + this.isimSoyisimNumara;
  //  url2 = "https://ng-shopapp-3666b-default-rtdb.firebaseio.com/products";
  //  ELEMENT_DATA2: PeriodicElement[]  = [
  //    {position: "1", name: 'Hydrogen', weight: "1.0079", symbol: 'H'},
  //    {position: "2", name: 'Helium', weight: "4.0026", symbol: 'He'},
  //    {position: "3", name: 'Lithium', weight:" 6.941", symbol: 'Li'},
  //    {position: "4", name: 'Beryllium', weight: "9.0122", symbol: 'Be'},
  //    {position: "5", name: 'Boron', weight: "10.811", symbol: 'B'},
  //    {position:" 6", name: 'Carbon', weight: "12.0107", symbol: 'C'},
  //    {position: "7", name: 'Nitrogen', weight: "14.0067", symbol: 'N'},
  //    {position: "8", name: 'Oxygen', weight: "15.9994", symbol: 'O'},
  //    {position: "9", name: 'Fluorine',weight: "18.9984", symbol: 'F'},
  //    {position: "10", name: 'Neon', weight: "20.1797", symbol: 'Ne'},
  // ];

  // ELEMENT_DATA3: PeriodicElement[]  = [
  //   {position: "1", name: 'Hydrogen', weight: "1.0079", symbol: 'H'}
  // ];
  products1: any[] = [];
  products1key: any[] = [];
  products2: any[] = [];
  products2key: any[] = [];
  b : any[];
  resultlist: any[];
  anahtar:string;
  anahtarlist: any[];


  constructor(private http: HttpClient,protected mn:WhereAnswersRecordedService,private changeDetectorRef: ChangeDetectorRef,private setapi:ApiService) {
    // this.resultss()
  }

  ngOnInit(){
    this.setapi.isim.subscribe((newData) => {
      this.isim = newData;
    });
    this.setapi.soyisim.subscribe((newData) => {
      this.soyisim = newData;
    });
    this.setapi.numara.subscribe((newData) => {
      this.numara = newData;
    });

  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  // dataSource= this.ELEMENT_DATA3;

  getresult(){
    this.isimSoyisimNumara= this.isim+this.soyisim+this.numara;
    this.url = "https://ng-shopapp-3666b-default-rtdb.firebaseio.com/answers/" + this.isimSoyisimNumara;
    return this.http
      .get(this.url + ".json")
      .pipe(
        map(data => {
          const products:any[] = [];
          // const productsnew: any[] = [];
          products.push(data)
          this.products2.push(data)
          // console.log(data)
          this.products1.push(this.products2)
          console.log(data)


          for(const key in data) {

            this.products2key.push(key)
            // this.products2key.push(this.anahtar)
            // productsnew.push({ ...data, id: key });
            this.products1key.push(this.products2key)
            console.log("iyii akşaömlar")
            console.log(this.products1key[0])


          }
          this.products2 = [];
          this.products2key = [];



          return products;
        }),
        tap(data => console.log()),
        // delay(1000)//1 dakika geciktir demek
      );
  }

  resultss(){
    this.isimSoyisimNumara= this.isim+this.soyisim+this.numara;
    this.url = "https://ng-shopapp-3666b-default-rtdb.firebaseio.com/answers/" + this.isimSoyisimNumara ;
    // let b:any[]
    this.getresult().subscribe(data => {

      for (let i = 0; i < this.products1key[0].length; i++) {
        this.anahtarlist= this.products1key[0]
        // this.anahtar=this.products1[0][this.resultlist]
        // this.resultlist.push(this.b)
        // this.anahtarlist.push(this.anahtar)
        // console.log(this.resultlist[])
        // console.log(this.resultlist[])
        // console.log(this.anahtar)


        // console.log(this.anahtarlist[i])
        console.log(this.products1[0][0][this.anahtarlist[i]])
        console.log("baykemal")
        let deneme = this.products1[0][0][this.anahtarlist[i]]
        // console.log(this.b["Soru"])
        // console.log(deneme["benimCevabim"])
        // console.log(this.b["benimCevabim"])
        // console.log(this.b["category"])
        // console.log(this.b["type"])
        // console.log(this.b["difficulty"])
///////////////////////////////////////
        let resulrdemeyanilma =
            {soru:deneme["Soru"],isim:this.isim,soyisim:this.soyisim,numara:this.numara,
              dogruCevap:deneme["dogruCevap"],benimCevabim:deneme["benimCevabim"],
              category:deneme["category"],
              difficulty:deneme["difficulty"],type:deneme["type"]}

        this.resultTablelist.push(resulrdemeyanilma)
        // this.resultTablelist.push(c)
        console.log(this.resultTablelist[i])
        this.resultTable.push(this.resultTablelist[i])

        // console.log(this.resultTable[0])

        this.changeDetectorRef.detectChanges()
        this.table.renderRows() // Tabloyu yeniden render et
        //////////////////////////////////////////////
        // let resulrdemeyanılma =[
        //   {soru:b[i].soru,isim:this.isim,soyisim:this.soyisim,numara:this.numara,
        //     dogruCevap:b[i].dogruCevap,benimCevabim:b[i].benimCevabim,
        //     category:b[i].category,difficulty:b[i].difficulty,type:b[i].type},
        // ]
        // console.log(resulrdemeyanılma)

        // this.dataSource=this.ELEMENT_DATA2
        // this.resultTable=

        // this.ELEMENT_DATA2.push({position:i.toString(),name:this.anahtar,weight:this.products1[0][this.anahtar].soru,symbol:this.products1[0][this.anahtar]["benim cevabım"]})
        // this.dataSource=this.ELEMENT_DATA2


      }
      //for sonu
      this.resultTablelist.splice(0, this.resultTablelist.length);
      this.resultTable.splice(0, this.resultTable.length);
      this.products1key.splice(0,  this.products1key.length);
      this.anahtarlist.splice(0,  this.anahtarlist.length);

      // console.log(this.b)
      // console.log(this.anahtar)

    });
    // let anahtar = "-NWbE8j-UbLDF8Hn7eor"; // Görüntülemek istediğiniz anahtar
    // for (const key in this.products1key) {
    //   console.log(key)
    // }

    //
    // for (const key in obj) {
    //   const item = obj[key];
    //   // ['soru']
    //   console.log(item['soru']); // Soruyu konsola yazdırma
    //   console.log(item["benim cevabım"]); // "benim cevabım" değerini konsola yazdırma
    //   console.log(item["doğru cevap"]); // "doğru cevap" değerini konsola yazdırma
    // }
  }





// : Observable<any[]>categoryId: number
  // for(const key in data){
  //   // console.log(data)
  //   // console.log(key)
  //   this.products2key.push(key)
  //   this.products2.push({ ...data, id: key });
  //   // console.log(products)
  //   // console.log(products.key)
  // }
  // for(const key in data  ){
  //   // for (let i = 0; i < this.products2.length; i++) {}
  //   // // console.log(data)
  //   // // console.log(key)
  //   // products.push({ ...data, id: key });
  //   // console.log(products[0].id)
  // }
  // private urll = "https://ng-shopapp-3666b-default-rtdb.firebaseio.com/answers/%C3%B6merkaya1995";
  // products2: any[] = [];
  // products2key: any[] = [];

  // getresult() {
  //   this.http.get(this.urll + ".json").subscribe((data) => {
  //     // console.log(data)
  //     console.log(data)
  //     for(const key in data  ){
  //         // for (let i = 0; i < this.products2.length; i++) {}
  //         // console.log(data)
  //         // console.log(key)
  //         console.log("selam")
  //       this.products2.push({ ...data, id: key });
  //       console.log( this.products2)
  //
  //
  //       if (this.products2[0] == false){
  //       // this.products2.push({ ...data, id: key });     for(const key in data  ){
  //       //     // for (let i = 0; i < this.products2.length; i++) {}
  //       //     // console.log(data)
  //       //     // console.log(key)
  //       //     console.log("selam")
  //       //     this.products2.push({ ...data, id: key });
  //         }
  //
  //       }
  //     // console.log(this.products2)
  //
  //     // let a = this.products2[0].id
  //     // console.log(this.products2[0].id)
  //     // console.log(a)
  //     // console.log(this.products2[1])
  //     // console.log(this.products2[1].key)
  //     // // console.log(this.products2[1]('-NWbE8ddz6Ef99MLMbMt').soru)
  //     // const anahtar = "-NWbE8j-UbLDF8Hn7eor"; // Görüntülemek istediğiniz anahtar
  //     // const soru = this.products2[1][anahtar].soru;
  //     // console.log(soru);
  //
  //
  //   });
  //
  // }
  // let a = this.products2key[1]
  // let b = this.-NWbE8ddz6Ef99MLMbMt
  // console.log(this.products2[1].a)
  // console.log(this.products2[1].)
  // console.log(this.products2key[1])


  // /////  pipe(
  //     map(data => {
  //       console.log(data);
  //       const products: any[] = [];
  //       for(const key in data){
  //         products.push({ ...data[key], id: key });
  //       }
  //
  //       return products;
  //     }),
  //    tap(data => console.log(data)),
  //
  // )/////////
    // return this.http
    //   .get<any[]>(this.url + ".json")
    //   .pipe(
    //     map(data => {
    //       const products: any[] = [];
    //
    //       for(const key in data) {
    //         if(categoryId) {
    //           if(categoryId == data[key].categoryId) {
    //             products.push({ ...data[key], id: key });
    //           }
    //         }
    //         else {
    //           products.push({ ...data[key], id: key });
    //         }
    //       }
    //
    //       return products;
    //     }),
    //     tap(data => console.log(data)),
    //     delay(1000)//1 dakika geciktir demek
    //   );



}
