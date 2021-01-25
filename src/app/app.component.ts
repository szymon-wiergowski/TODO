import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() { }
  public title = 'To-Do List';
  public showForm: boolean = false;
  public showCompleted: boolean = false;
  changingValue: Subject<boolean> = new Subject<boolean>();

  addNewTask(){
    this.showForm = !this.showForm;
  }

  selCompleted(){
    this.showCompleted = !this.showCompleted;
    this.changingValue.next(this.showCompleted);
  }

  hideForm(value){
    this.showForm = value;
  }
}
