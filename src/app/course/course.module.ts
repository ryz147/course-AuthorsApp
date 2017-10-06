import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { ListComponent } from './list.component';
import { DetailComponent } from './detail.component';
import { COURSE_ROUTES } from './course.routing';
import { CourseService } from './course.service';
import { FormComponent } from './form.component';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";



@NgModule({
  imports: [
    CommonModule,
    COURSE_ROUTES,
    HttpModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports:[ PageComponent ],
  providers: [CourseService],
  declarations: [PageComponent, ListComponent, DetailComponent, FormComponent]
})
export class CourseModule { }
