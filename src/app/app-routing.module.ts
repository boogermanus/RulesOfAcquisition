import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RuleGeneratorComponent } from './rule-generator/rule-generator.component';
import { RuleListComponent } from './rule-list/rule-list.component';


const routes: Routes = [
  {path: 'list', component: RuleListComponent},
  {path: '**', component: RuleGeneratorComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
