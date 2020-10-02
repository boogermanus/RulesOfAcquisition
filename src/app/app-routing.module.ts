import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RuleFavoritesComponent } from './rule-favorites/rule-favorites.component';
import { RuleGeneratorComponent } from './rule-generator/rule-generator.component';
import { RuleListComponent } from './rule-list/rule-list.component';


const routes: Routes = [
  {path: 'list', component: RuleListComponent},
  {path: 'favorites', component: RuleFavoritesComponent},
  {path: '**', component: RuleGeneratorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
