import { Injectable } from '@angular/core';
import { AssignmentRow } from './assignment-row';

@Injectable()
export class AddAssignmentService {
  constructor() { }
  assignmentTable = [];
  runningTotalPoints = {
    points: 0,
    pointsPossible: 0
  }

  addAssignment(assignmentName: string, scoredPoints: number, pointsPossible: number ): AssignmentRow[] {
    let assignmentDecimal = scoredPoints / pointsPossible;
    
    let assignmentRow: AssignmentRow = {
      assignmentName: assignmentName,
      scoredPoints: scoredPoints,
      pointsPossible: pointsPossible,
      assignmentDecimal: assignmentDecimal
    }

    this.assignmentTable.push(assignmentRow);

    return this.assignmentTable;

  }

  runningTotals(scoredPoints: number, pointsPossible: number) {
    this.runningTotalPoints.points += scoredPoints;
    this.runningTotalPoints.pointsPossible += pointsPossible;
    return this.runningTotalPoints;
  }

}
