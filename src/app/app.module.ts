import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// tslint:disable-next-line:import-spacing
import { FormsModule }from '@angular/forms';
import { CourseModule } from './course/course.module';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routing';
import { NavbarComponent } from './navbar.component';
import { AuthorModule } from './author/author.module';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CourseModule,
    AuthorModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
