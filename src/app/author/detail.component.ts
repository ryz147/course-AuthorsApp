import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs'
@Component({
  selector: 'app-detail',
  template: `
    <p>
      detail Works for authorid {{authorId}}
    </p>
  `,
  styles: []
})
export class DetailComponent implements OnInit {
  
  authorId:string;
  authorIdSubscription:Subscription

  constructor(private ac: ActivatedRoute) { 
    this.authorIdSubscription = this.ac.params.subscribe(params=>{
      this.authorId = params['authorId'];
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.authorIdSubscription.unsubscribe();
  }

}
