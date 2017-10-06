import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';

@Component({
  selector: 'app-page',
  template: `
    <h1>Courses</h1>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
