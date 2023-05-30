import {Component, SimpleChanges} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, map, of} from "rxjs";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {ServisService} from "./componentss/service/servis.service";
import {FormBuilder, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {SetapiComponent} from "./componentss/setapi/setapi.component";
import {ToggleService} from "./componentss/service/toggle.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mlhhmz';
  toggle = this.ToggleService.togglee

  panelOpenState = false;


  constructor(private httpp: HttpClient  ,protected ServisServices:ServisService , private ToggleService:ToggleService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['toggle']) {
      // Değişken değiştiğinde yapılacak işlemler burada gerçekleştirilir
      console.log('myVariable değişti:', this.toggle);
    }
  }


    toggles()
    {
      //
      this.ToggleService.updateDatatoggle()
      // this.toggle = !this.toggle
      // this.ToggleService.next(newData);
      this.httpp.get("https://ng-shopapp-3666b-default-rtdb.firebaseio.com/answers/halilmaral1.json").subscribe((newData) => {
       console.log(newData)
    });

    }
  ngOnInit(): void {
    this.ToggleService.toggle.subscribe((newData) => {
      this.toggle = newData;
    });
  }



}
