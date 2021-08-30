import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressinfoComponent } from './addressinfo/addressinfo.component';
import { BasicinfoComponent } from './basicinfo/basicinfo.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {
    path:'',
    component: StudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
