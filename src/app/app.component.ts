import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() { }
  changingValue: Subject<boolean> = new Subject<boolean>();
  public title = 'To-Do List';
  public showForm = false;
  public showCompleted = false;

  addNewTask(): void {
    this.showForm = !this.showForm;
  }

  selCompleted(): void {
    this.showCompleted = !this.showCompleted;
    this.changingValue.next(this.showCompleted);
  }

  hideForm(value: boolean): void {
    this.showForm = value;
  }
}
