import { Component, OnInit } from '@angular/core';
import {AuthorService }from './author.service';
import{ Author} from './author';
@Component({
  selector: 'app-page',
  template: `
    <h1>Authors</h1>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
