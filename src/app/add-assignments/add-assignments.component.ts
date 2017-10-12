import { Component, OnInit } from '@angular/core';

import { AddAssignmentService } from './add-assignment.service';

@Component({
  selector: 'app-add-assignments',
  templateUrl: './add-assignments.component.html',
  styleUrls: ['./add-assignments.component.css']
})
export class AddAssignmentsComponent implements OnInit {

  constructor(
    private addAssignment: AddAssignmentService,
  ) { }

    assignmentTable = [];
  
    assignmentName: string;
    scoredPoints: number;
    pointsPossible: number;
  
    
    addAssignmentRow(): void {
      // Call the service to add assignments.
      this.assignmentTable = this.addAssignment.addAssignment(this.assignmentName, this.scoredPoints, this.pointsPossible);
  
      // Reset all of the input boxes.
      this.assignmentName = null;
      this.scoredPoints = null;
      this.pointsPossible = null;
    }

  ngOnInit() {
  }

}