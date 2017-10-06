import { Injectable } from '@angular/core';

@Injectable()

export class AssignmentResult {
  constructor(public newAssignmentName:string, public newPointsScored:number, public newPossiblePoints:number, public newPercent:number) {}
}

// export class OverallperformanceResult {
//   constructor(public myPerformance = {newPointsScored:0, newPossiblePoints:0, newPercent:0, newGrade:'x'}) {}
// }

export class StudentServiceService {
  private existingAssignments = [];
  //public myOverallPerformance = new OverallperformanceResult();
  myOverallPerformance = { newPointsScored:0, newPossiblePoints:0, newPercent:0, newGrade:'x'};

  constructor() { }

  AddAssignment(assignmentName:string, pointsScored:number, possiblePoints:number): any {
    let myResult;
    let myPercent = 0;
    if(pointsScored > 0 && possiblePoints > 0){
        myPercent = (pointsScored/possiblePoints)*100;
        myResult = new AssignmentResult(assignmentName, pointsScored, possiblePoints, myPercent);
        this.existingAssignments.push(myResult);

        //refresh the overall performance
        this.calculateOverallPerformance();
    }
    return this.existingAssignments;

  }

  calculateOverallPerformance(): any {
    let myTotalScore: number = 0; 
    let totalPossibleScore: number = 0; 
    let myPercent:number = 0;
    let myGrade:string = '';

    for (let i = 0; i < this.existingAssignments.length; i++) {
      myTotalScore += this.existingAssignments[i].newPointsScored;
      totalPossibleScore += this.existingAssignments[i].newPossiblePoints;
    }

    myPercent = (myTotalScore/totalPossibleScore)*100;

    if(myPercent >= 90 && myPercent <= 100){
      myGrade = "A";
    }
    else if(myPercent >= 80 && myPercent < 90){
      myGrade = "B";
    } else if(myPercent >= 70 && myPercent < 80){
      myGrade = "C";
    }
    else if(myPercent >= 60 && myPercent < 70){
      myGrade = "D";
    }
    else{
      myGrade = "D";
    }
    console.log(myTotalScore +"/"+totalPossibleScore+"/"+myPercent+"/"+myGrade);

    this.myOverallPerformance.newPointsScored=myTotalScore;
    this.myOverallPerformance.newPossiblePoints=totalPossibleScore;
    this.myOverallPerformance.newPercent=myPercent;
    this.myOverallPerformance.newGrade=myGrade;

  }
}
