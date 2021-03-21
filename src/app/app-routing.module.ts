import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormNotifyComponent } from './form-notify/form-notify.component';


const routes: Routes = [
  { path: 'first-component', component: FormNotifyComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


 