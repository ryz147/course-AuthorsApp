import { RouterModule } from '@angular/router';
import { PageComponent } from './page.component';
import { ListComponent } from './list.component';
import { DetailComponent } from './detail.component';
import { FormComponent } from './form.component';

export const AUTHOR_ROUTES = RouterModule.forChild([
    { path: '', component:PageComponent },
    { path: '', component:PageComponent, children:[
        {path:'form', component: FormComponent},
        {path:'form/:authorId', component: FormComponent},
        {path:'list', component: ListComponent}
       // {path:'form/:authorId', component: FormComponent,children:[
        //    { path:'detail/:authorId', component: DetailComponent}
       // ]},
        
    ]},
]);