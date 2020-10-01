import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RuleGeneratorComponent } from './rule-generator/rule-generator.component';


const routes: Routes = [
  {path: '**', component: RuleGeneratorComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
