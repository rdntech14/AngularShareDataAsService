import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';

const routes: Routes = [
  { path: 'sibling1', component: Sibling1Component },
  { path: 'sibling2', component: Sibling2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
