import {Component} from '@angular/core';
import {FormBuilder, FormsModule, Validators} from '@angular/forms';
import {ApiService} from "../service/api.service";
import {ToggleService} from "../service/toggle.service";


@Component({
  selector: 'app-setapi',
  templateUrl: './setapi.component.html',
  styleUrls: ['./setapi.component.css'],

})
export class SetapiComponent {
  isim :string = "hamza";
  soyisim :string = "maral";
  numara :string="2";
  isimSoyisimNumara:string= this.isim+this.soyisim+this.numara

  // firstFormGroup = this._formBuilder.group({
  //   firstCtrl: ['', Validators.required],
  // });
  // secondFormGroup = this._formBuilder.group({
  //   secondCtrl: ['', Validators.required],
  // });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder,private setapi:ApiService,private ToggleService:ToggleService) {}
  call(){
    this.isimSoyisimNumara= this.isim+this.soyisim+this.numara
    this.setapi.updateDataisim(this.isim);
    this.setapi.updateDatasoyisim(this.soyisim);
    this.setapi.updateDatanumara(this.numara);
    this.ToggleService.updateDatatoggle()
  }

}
