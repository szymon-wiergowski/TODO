import { Data } from './../models/models';
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

  completed(id: string): void {
    this.saveItem(this.item.id);
  }

  edit(): void {
    this.isEdit = !this.isEdit;
    this.itemName = this.item.task;
  }

  deleteItem(id: string): void {
    this.State.deleteTask(id);
  }

  saveItem(item: Data): void {
    this.State.saveTask(item);
  }
}
