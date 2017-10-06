import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-performance-data',
  templateUrl: './performance-data.component.html',
  styleUrls: ['./performance-data.component.css']
})
export class PerformanceDataComponent implements OnInit {

  //myOverallPerformance = {scoredpoints:0,possiblePoints:0,overallpercent:0,overallGrade: ''};
  performanceResults: object;

  constructor(private myStudentServiceService: StudentServiceService){
    this.performanceResults = this.myStudentServiceService.myOverallPerformance;
  }

  ngOnInit() {
    this.performanceResults = this.myStudentServiceService.myOverallPerformance;
  }

}
