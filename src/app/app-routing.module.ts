import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RuleGeneratorComponent } from './rule-generator/rule-generator.component';
import { RuleListComponent } from './rule-list/rule-list.component';


const routes: Routes = [
  {path: 'list', component: RuleListComponent},
  {path: 'random', component: RuleGeneratorComponent},
  {path: '', component: RuleGeneratorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
