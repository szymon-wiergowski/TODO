import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from '../app/app.component';
import { TopMenuComponent } from '../app/top-menu/top-menu.component';
import { TodoItemComponent } from '../app/to-do-item/to-do-item.component';
import { ToDoListComponent } from '../app/to-do-list/to-do-list.component';
import { AddTaskComponent } from './add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    TodoItemComponent,
    ToDoListComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
