import { Injectable } from '@angular/core';
import { AssignmentRow } from './assignment-row';

@Injectable()
export class AddAssignmentService {
  constructor() { }
  assignmentTable = [];
  runningTotalPoints = {
    points: 0,
    pointsPossible: 0,
    overallDecimal: 0
  }

  addAssignment(assignmentName: string, scoredPoints: number, pointsPossible: number ): AssignmentRow[] {
  
    let assignmentRow = new AssignmentRow( assignmentName, scoredPoints, pointsPossible );

    this.assignmentTable.push(assignmentRow);

    this.runningTotalPoints.points += scoredPoints;
    this.runningTotalPoints.pointsPossible += pointsPossible;
    this.runningTotalPoints.overallDecimal = this.runningTotalPoints.points / this.runningTotalPoints.pointsPossible;

    return this.assignmentTable;

  }

}