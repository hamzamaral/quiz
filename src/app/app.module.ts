import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// import { ShowcomponentComponent } from './componentss/showcomponent/showcomponent.component';
import {MatCardModule} from '@angular/material/card';
import { SelectQuestionComponent } from './componentss/select-question/select-question.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatDividerModule} from "@angular/material/divider";
import {MatSelectModule} from "@angular/material/select";
import { OpenComponent } from './componentss/open/open.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatStepperModule} from "@angular/material/stepper";
import { MatFormFieldModule } from '@angular/material/form-field';
// import { CorrectAnswerComponent } from './componentss/showcomponent/correct-answer/correct-answer.component';
// import { NavbarComponent } from './componentss/navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatExpansionModule} from "@angular/material/expansion";
import { QuestionsComponent } from './componentss/questions/questions.component';
import { StudentInformationComponent } from './componentss/student-information/student-information.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {CommonModule} from "@angular/common";
import {AppComponent} from './app.component';

import {MAT_DIALOG_SCROLL_STRATEGY, MatDialog} from "@angular/material/dialog";
import {BlockScrollStrategy, Overlay, ScrollDispatcher} from "@angular/cdk/overlay";
import {SetapiComponent} from "./componentss/setapi/setapi.component";
import {ResultsComponent} from "./componentss/results/results.component";
import {MatTableModule} from "@angular/material/table";
import { DenemeComponent } from './componentss/deneme/deneme.component';
// import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [
    AppComponent,
    // ShowcomponentComponent,
     SelectQuestionComponent,
     OpenComponent,
     QuestionsComponent,
     StudentInformationComponent,
    SetapiComponent,
    ResultsComponent,
    DenemeComponent,



  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatExpansionModule,
    MatMenuModule,
    MatSidenavModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// MatDialog,
//
//   { provide: MAT_DIALOG_SCROLL_STRATEGY, useFactory: (overlay: Overlay) => () => overlay.scrollStrategies.block(), deps: [Overlay] },
//   ScrollDispatcher,
//   BlockScrollStrategy,
//   { provide: BlockScrollStrategy, deps: []}
//
