import { RouterModule } from '@angular/router';
import { PageComponent } from './page.component';
import { ListComponent } from './list.component';
import { DetailComponent } from './detail.component';
import { FormComponent } from './form.component';


export const COURSE_ROUTES = RouterModule.forChild([
    { path: '', component:PageComponent },
    { path: '', component:PageComponent, children:[
        {path: 'form', component: FormComponent},
        {path: 'form/:courseId', component: FormComponent},
        {path:'list', component: ListComponent},
        //{path:'list', component: ListComponent,children:[
        //   { path:'form/detail/:courseId', component: DetailComponent}
        //]},
        
    ]},
]);

