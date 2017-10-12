import { Component, OnInit } from '@angular/core';

import { AddAssignmentService } from '../add-assignments/add-assignment.service';

@Component({
  selector: 'app-performance-table',
  templateUrl: './performance-table.component.html',
  styleUrls: ['./performance-table.component.css']
})
export class PerformanceTableComponent implements OnInit {
  performanceTable

  constructor(
    public addAssignment: AddAssignmentService,
  ) { }

  ngOnInit() {
    this.performanceTable = this.addAssignment.runningTotalPoints;
  }

}
