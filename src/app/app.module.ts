import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AssignmentDataComponent } from './assignment-data/assignment-data.component';
import { PerformanceDataComponent } from './performance-data/performance-data.component';
import { StudentServiceService } from './student-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentDataComponent,
    PerformanceDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StudentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
