import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddAssignmentService } from './add-assignment.service';
import { OverallPerformanceService } from './overall-performance.service';
import { LetterGradePipe } from './letter-grade.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LetterGradePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AddAssignmentService,
    OverallPerformanceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
