import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddAssignmentService } from './add-assignments/add-assignment.service';
import { LetterGradePipe } from './custom-pipes/letter-grade.pipe';
import { StudentInfoComponent } from './student-info/student-info.component';
import { PerformanceTableComponent } from './performance-table/performance-table.component';
import { AddAssignmentsComponent } from './add-assignments/add-assignments.component';


@NgModule({
  declarations: [
    AppComponent,
    LetterGradePipe,
    StudentInfoComponent,
    PerformanceTableComponent,
    AddAssignmentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AddAssignmentService,    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
