import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {
  studentName = "Bob Smith";
  studentEmail = "bobsmith@gmail.com"

  constructor() { }

  ngOnInit() {
  }

}
