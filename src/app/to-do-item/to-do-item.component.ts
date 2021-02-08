import { Data } from '../models/data';
import { Component, OnInit, Input } from '@angular/core';
import { AppStateService } from '../app-state.service';

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
  public itemName: string;

  ngOnInit(): void {
  }

  completed(item: Data): void {
    this.saveItem(item);
  }

  edit(): void {
    this.isEdit = !this.isEdit;
    this.itemName = this.item.task;
  }

  deleteItem(item: Data): void {
    item.isDeleted = true;
    this.State.deleteTask(item);
  }

  saveItem(item: Data): any {
    this.State.saveTask(item);
  }
}
