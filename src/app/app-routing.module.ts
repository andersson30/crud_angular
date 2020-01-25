import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{Routes,RouterModule}from'@angular/router';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { importType } from '@angular/compiler/src/output/output_ast';

const routes: Routes =[
{ path:'heroes',component: HeroesComponent},
{ path:'heroe/:id',component:HeroeComponent},
{path:'**',pathMatch: 'full', redirectTo: 'heroes'}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }


