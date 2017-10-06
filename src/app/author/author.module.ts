import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { ListComponent } from './list.component';
import { DetailComponent } from './detail.component';
import { AUTHOR_ROUTES } from './author.routing';
import { AuthorService } from './author.service';
import { FormComponent } from './form.component';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
@NgModule({
  imports: [
    CommonModule,
    AUTHOR_ROUTES,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ PageComponent ],
   providers:[AuthorService],
  declarations: [PageComponent, ListComponent, DetailComponent, FormComponent]
 
})
export class AuthorModule { }
