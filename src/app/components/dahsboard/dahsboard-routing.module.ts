import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DahsboardComponent } from './dahsboard.component';

const routes: Routes = [
  { path: '', component: DahsboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DahsboardRoutingModule { }
