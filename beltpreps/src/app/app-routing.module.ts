import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import {Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';

const routes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'new', component: NewComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: 'view/:id', component: ViewComponent},
  { path: '**', component: HomeComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
