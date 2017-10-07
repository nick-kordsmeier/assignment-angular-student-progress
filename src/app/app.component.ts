import { Component } from '@angular/core';

import { AddAssignmentService } from './add-assignment.service';
import { OverallPerformanceService } from './overall-performance.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor (
    private addAssignment: AddAssignmentService,
    private overallPerformance: OverallPerformanceService
  ) {};

  assignmentTable = [];

  assignmentName: string;
  scoredPoints: number;
  pointsPossible: number;

  performanceTable = {
    points: 0,
    pointsPossible: 0,
    overallDecimal: 0
  }
  overallPoints;
  overallScoredPoints;
  overallPointsPossible;

  
  addAssignmentRow(): void {
    // Call the service to add assignments.
    this.assignmentTable = this.addAssignment.addAssignment(this.assignmentName, this.scoredPoints, this.pointsPossible);
    
    // Update the overall performance table:
    this.overallPoints = this.addAssignment.runningTotals(this.scoredPoints, this.pointsPossible);
    this.performanceTable = this.overallPerformance.overallPerformanceTable(this.overallPoints.points, this.overallPoints.pointsPossible);

    // Reset all of the input boxes.
    this.assignmentName = null;
    this.scoredPoints = null;
    this.pointsPossible = null;

  }

}
