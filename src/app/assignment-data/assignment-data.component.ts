import { Component, OnInit, Input } from '@angular/core';
import { StudentServiceService } from '../student-service.service';


@Component({
  selector: 'app-assignment-data',
  templateUrl: './assignment-data.component.html',
  styleUrls: ['./assignment-data.component.css']
})

export class AssignmentDataComponent implements OnInit {
  public assignment: string;
  public scoredpoints: number;
  public possiblepoints: number;
  public results: [object];
  public clearTable: boolean;
  
  constructor(private StudentResults: StudentServiceService) { }

  ngOnInit() {
    this.clearInputs();
  }
  clearInputs(): void {
    this.assignment = null;
    this.scoredpoints = null;
    this.possiblepoints = null;
    //this.clearTable = true;
  }

  updateStudentAssignments(): void {
    //this.clearTable = false;
    this.results = this.StudentResults.AddAssignment(this.assignment, this.scoredpoints, this.possiblepoints);
    this.clearInputs();
  }



}
