import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppStateService } from '../app-state.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Input() addTask: boolean;
  @Output() hideForm: EventEmitter<boolean> = new EventEmitter();
  public name: string;
  public isCompleted = false;
  public doneField = 0;

  constructor(private State: AppStateService) { }

  ngOnInit(): void {
  }

  hide(): void {
    this.addTask = !this.addTask;
    this.hideForm.emit(this.addTask);
  }

  createId(): string {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  addItem(): void {
    const id = this.createId();
    const name = this.name;
    this.isCompleted === true ? this.doneField = 1 : this.doneField = 0;
    this.hide();
    this.State.addTask(id, this.doneField, name);
    this.name = '';
  }
}
