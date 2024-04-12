import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/list', pathMatch: 'full' },
  {path: 'form', component:FormComponent},
  { path: 'list', component: ListComponent },
  { path: 'edit/:id', component: EditComponent } // Route with parameter for item ID

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
