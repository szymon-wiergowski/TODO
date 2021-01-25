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
  public isCompleted: boolean = false;
  public doneField = 0;

  constructor(private State: AppStateService) { }

  ngOnInit(): void {   
  }

  hide(){
    this.addTask = !this.addTask;
    this.hideForm.emit(this.addTask);
  }

  ID() {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  addItem(){
    const id = this.ID();
    const name = this.name;     
    this.isCompleted === true ? this.doneField = 1 : this.doneField = 0;
    this.hide();
    this.State.addTask(id, this.doneField, name);
    this.name = "";
  }
}