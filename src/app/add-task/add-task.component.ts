import { Item } from './../models/models';
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
  public newItem = new Item('', '', '', false, false);

  constructor(private State: AppStateService) { }

  ngOnInit(): void {
  }

  hide(): void {
    this.addTask = !this.addTask;
    this.hideForm.emit(this.addTask);
  }

  createId() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxx'.replace(/[xy]/g, (c) => {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
  }

  addItem(): void {
    this.newItem = new Item(this.createId(), 'wiergowski.szymon', this.newItem.task, this.newItem.isCompleted, false);
    this.hide();
    this.State.addTask(this.newItem);
    this.newItem = new Item();
  }
}
