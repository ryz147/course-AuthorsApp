import { Author } from './author';
import { Http, Headers} from '@angular/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthorService{
    URL: string='http://localhost:18082/author';
    private authors:Array<Author>=[];

    constructor(private http:Http) { }

public getAuthors(){
        return this.http.get(this.URL);
    }
    getAuthor(authorId:number){
        return this.http.get(this.URL + '/' + authorId)
    }

    deleteAuthor(authorId:number){
        return this.http.delete(this.URL + '/' + authorId);
    }

    saveCourse(author: Author){
        let rheader = new Headers();
        rheader.set("content-type", "application/json");
        if (author.authorId === undefined){
            console.log(author.authorName);
            return this.http.post(this.URL, JSON.stringify(author), {headers: rheader})
        }
        else{
            return this.http.put(this.URL, JSON.stringify(author),
        {headers: rheader});
        }
    }
}