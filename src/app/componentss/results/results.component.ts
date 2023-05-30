import {ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, map, Observable, tap} from "rxjs";
import {WhereAnswersRecordedService} from "../service/where-answers-recorded.service";
import {MatTable} from "@angular/material/table";
export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}

// benim cevabım
//   :
//   "Scrappy"
// doğru cevap
//   :
//   "Scoobert"
// soru
//   :
//   1

const ELEMENT_DATA: PeriodicElement[] = [
  {position: "1", name: 'Hydrogen', weight: "1.0079", symbol: 'H'},
  {position: "2", name: 'Helium', weight: "4.0026", symbol: 'He'},
  {position: "3", name: 'Lithium', weight:" 6.941", symbol: 'Li'},
  {position: "4", name: 'Beryllium', weight: "9.0122", symbol: 'Be'},
  {position: "5", name: 'Boron', weight: "10.811", symbol: 'B'},
  {position:" 6", name: 'Carbon', weight: "12.0107", symbol: 'C'},
  {position: "7", name: 'Nitrogen', weight: "14.0067", symbol: 'N'},
  {position: "8", name: 'Oxygen', weight: "15.9994", symbol: 'O'},
  {position: "9", name: 'Fluorine',weight: "18.9984", symbol: 'F'},
  {position: "10", name: 'Neon', weight: "20.1797", symbol: 'Ne'},
];


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  @ViewChild(MatTable, {static: false}) table: MatTable<any> | undefined;

  private url = "https://ng-shopapp-3666b-default-rtdb.firebaseio.com/answers/%C3%B6merkaya1995";
  private url2 = "https://ng-shopapp-3666b-default-rtdb.firebaseio.com/products";
   ELEMENT_DATA2: PeriodicElement[]  = [
     {position: "1", name: 'Hydrogen', weight: "1.0079", symbol: 'H'},
     {position: "2", name: 'Helium', weight: "4.0026", symbol: 'He'},
     {position: "3", name: 'Lithium', weight:" 6.941", symbol: 'Li'},
     {position: "4", name: 'Beryllium', weight: "9.0122", symbol: 'Be'},
     {position: "5", name: 'Boron', weight: "10.811", symbol: 'B'},
     {position:" 6", name: 'Carbon', weight: "12.0107", symbol: 'C'},
     {position: "7", name: 'Nitrogen', weight: "14.0067", symbol: 'N'},
     {position: "8", name: 'Oxygen', weight: "15.9994", symbol: 'O'},
     {position: "9", name: 'Fluorine',weight: "18.9984", symbol: 'F'},
     {position: "10", name: 'Neon', weight: "20.1797", symbol: 'Ne'},
  ];

  ELEMENT_DATA3: PeriodicElement[]  = [
    {position: "1", name: 'Hydrogen', weight: "1.0079", symbol: 'H'}
  ];
  products1: any[] = [];
  products1key: any[] = [];
  products2: any[] = [];
  products2key: any[] = [];

  constructor(private http: HttpClient,protected mn:WhereAnswersRecordedService,private changeDetectorRef: ChangeDetectorRef) {
    // this.resultss()
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  mlk= this.mn.m
  dataSource= this.ELEMENT_DATA3;

  getresult(){
    return this.http
      .get(this.url + ".json")
      .pipe(
        map(data => {
          const products:any[] = [];
          const productsnew: any[] = [];
           // const productskey: { [key: string]: { [key: string]: string | number } }  = [];
          products.push(data)
          this.products1.push(data)
          console.log(data)
          // console.log(data)

          for(const key in data) {
            productsnew.push({ ...data, id: key });
            this.products1key.push(key)
            // return productskey
            // console.log(this.products1key)
            // if(categoryId) {
            //   if(categoryId == data[key].categoryId) {
            //     products.push({ ...data[key], id: key });
            //   }
            // }
            // else {
            //   products.push({ ...data[key], id: key });
            // }

          }
          // const anahtar = "-NWbE8j-UbLDF8Hn7eor"; // Görüntülemek istediğiniz anahtar
          //
          // console.log(this.products1[0][anahtar].soru)
          // console.log(this.products1key)


          // let a= productskey[0]
          // const soru = data[a].soru;

          // console.log(data)


          return products;
        }),
        tap(data => console.log()),
        delay(1000)//1 dakika geciktir demek
      );
  }

  resultss(){
    this.getresult().subscribe(data => {
      // this.products1 = data;
      // console.log(this.products1[0])
      // this.loading = false;
      // let m ={position: "1", name: 'Hydrogen', weight: "1.0079", symbol: 'H'}
      //   this.ELEMENT_DATA2.push(m)
      // this.dataSource=this.ELEMENT_DATA2
      // console.log(this.dataSource)


      for (let i = 0; i < this.products1key.length; i++) {
        let anahtar:string = this.products1key[i]
        let b =this.products1[0][anahtar].soru
        console.log(b)
        for (let j = 0; j < this.products1key.length; j++) {}
        // let m ={position: "1", name: 'Hydrogen', weight: "1.0079", symbol: 'H'}
        // this.ELEMENT_DATA2.push(m)
        this.dataSource=this.ELEMENT_DATA2
        console.log(this.dataSource)
        // this.ELEMENT_DATA2.push(m)
        this.ELEMENT_DATA2.push({position:i.toString(),name:anahtar,weight:this.products1[0][anahtar].soru,symbol:this.products1[0][anahtar]["benim cevabım"]})
        this.dataSource=this.ELEMENT_DATA2
        this.changeDetectorRef.detectChanges()
        this.table.renderRows(); // Tabloyu yeniden render et

        console.log(this.dataSource)
        //
        // this.ELEMENT_DATA3=this.ELEMENT_DATA2
        // console.log(this.products1key[i]);
      }
      // this.dataSource=this.ELEMENT_DATA2
      // console.log(this.dataSource)


      // for (const key in this.products1key) {
      //   console.log(key)
      //
      // }
      ////////////////////// let anahtar = "-NWbE8j-UbLDF8Hn7eor"; // Görüntülemek istediğiniz anahtar
     ////////////////////////// console.log(this.products1[0][anahtar])
      //////////////////////// console.log(this.products1key)
    });
    // let anahtar = "-NWbE8j-UbLDF8Hn7eor"; // Görüntülemek istediğiniz anahtar
    // for (const key in this.products1key) {
    //   console.log(key)
    // }

    // console.log(this.products1[0][anahtar])
    // console.log(this.products1key)



    // const obj: { [key: string]: { [key: string]: string | number } } = {
    //   "-NWbE8ddz6Ef99MLMbMt": {
    //     "benim cevabım": "Scrappy",
    //     "doğru cevap": "Scoobert",
    //     "soru": 1
    //   },
    //   "-NWbE8j-UbLDF8Hn7eor": {
    //     "benim cevabım": "Hamm",
    //     "doğru cevap": "Mr. Potato Head",
    //     "soru": 2
    //   },
    //   // Diğer öğeler...
    // };
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
