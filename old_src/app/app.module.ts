import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RuleGeneratorComponent } from './rule-generator/rule-generator.component';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { RuleViewComponent } from './rule-view/rule-view.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RuleListComponent } from './rule-list/rule-list.component';
import { RuleFavoritesComponent } from './rule-favorites/rule-favorites.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    RuleGeneratorComponent,
    RuleViewComponent,
    NavMenuComponent,
    RuleListComponent,
    RuleFavoritesComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
