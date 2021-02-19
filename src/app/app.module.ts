import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { from } from 'rxjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CountingComponent } from './counting/counting.component';
import { Lab4Component } from './lab4/lab4.component';
import { NavBarComponent } from './navbar/navbar.component';
import { SearchBarComponent } from './searchbar/searchbar.component';
import { TopBannerComponent } from './topbanner/topbanner.component';
import { CategoryMenuComponent} from './categorymenu/categorymenu.component';
import { ToDoListComponent} from './todolist/todolist.component';
import { TaskComponent } from './task/task.component';


@NgModule({
  declarations: [
    AppComponent, HomeComponent, CountingComponent, Lab4Component, NavBarComponent,SearchBarComponent,TopBannerComponent,CategoryMenuComponent,ToDoListComponent, TaskComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
