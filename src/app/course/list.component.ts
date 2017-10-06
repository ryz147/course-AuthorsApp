import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  template: `
  <div class="panel panel-default">
  <!-- Default panel contents -->
  <div class="panel-heading ">Courses </div>
  <div class="panel-body ">
    <button type= "button" class= "btn btn-primary" (click)="add()">Add</button>
  </div>
  <body style="background-color:powderblue;">
  <table class= "table table-striped">
  <thead>
  <tr>
    <th>Course Id</th>
     <th>Course Name</th>
    <th>Action</th>
  </tr>
  </thead>
  <tbody>
  <tr *ngFor="let course of courses">
     <td>{{course.courseId}}</td>
     <td><a [routerLink]="['/detail',course.courseId]">{{course.courseName}}</a></td>
     <td>
     <button type="button" class="btn btn-primary" (click)="edit(course.courseId)">Edit</button>
     <button type="button" class="btn btn-primary" (click)="delete(course)">Delete</button>
     </td>
     </tr>
     </tbody>
  </table>
  </body>
  </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class ListComponent implements OnInit {
  courses : Array<Course> = [];
  constructor( private courseService: CourseService, private router: Router) { 

  }

  ngOnInit() {
    this.courseService.getCourses().subscribe(response =>{
      this.courses = response.json();
      }, error => console.log(error.json ()));
    }
    edit (courseId:number){
      this.router.navigate(['courses/form',courseId]);
    }

    delete(course:Course){
      this.courseService.deleteCourse(course.courseId).subscribe(response =>{
          let index = this.courses.indexOf(course);
        this.courses.splice(index,1);
      }, error => console.log(error.json()));
    }

    add(){
      this.router.navigate(['courses/form']);
    }
}
