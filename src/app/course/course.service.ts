import { Course } from './course';
import {Http, Headers} from '@angular/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class CourseService{
    URL:string="http://localhost:18082/course";
    private courses:Array<Course>=[];

    

      constructor(private http:Http) { }

    public getCourses(){
        return this.http.get(this.URL);
    }

    getCourse(courseId:number){
        return this.http.get(this.URL+"/"+courseId)
    }

    deleteCourse(courseId:number){
        return this.http.delete(this.URL+"/"+courseId)
    }

    saveCourse(course:Course){
        let rheader = new Headers();
        rheader.set("content-type","application/json");
        if(course.courseId===undefined){
            console.log(course.courseName);
            return this.http.post(this.URL,JSON.stringify(course), {headers:rheader})
        }
        else{
            return this.http.put(this.URL,JSON.stringify(course),
        {headers:rheader});
        }
    }
}