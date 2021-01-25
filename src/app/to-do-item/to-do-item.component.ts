import { Component, OnInit, Input } from '@angular/core';
import { AppStateService } from '../app-state.service';

import { Data } from '../models/models';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  constructor(private State: AppStateService) { }
  @Input() item: Data;
  @Input() index: number;
  public isEdit = false;
  public isCompleted = false;
  public itemName: string;
  public doneField = 0;

  ngOnInit(): void {
    this.item.is_completed === 0 ? this.isCompleted = false :  this.isCompleted = true;
  }

  completed(id: string): void {
    this.saveItem(id);
  }

  edit(): void {
    this.isEdit = !this.isEdit;
    this.itemName = this.item.task;
  }

  deleteItem(id: string): void {
    this.State.deleteTask(id);
  }

  saveItem(id: string): void {
    const name = this.itemName;
    this.isCompleted === true ? this.doneField = 1 : this.doneField = 0;
    this.State.saveTask(id, this.doneField, name);
  }
}
