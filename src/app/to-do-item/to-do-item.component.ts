import { Data } from '../models/data';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() save: EventEmitter<Data> = new EventEmitter();
  @Output() delete: EventEmitter<Data> = new EventEmitter();
  public isEdit = false;
  public itemName: string;

  ngOnInit(): void {
  }

  completeTask(item: Data): void {
    this.saveItem(item);
  }

  edit(): void {
    this.isEdit = !this.isEdit;
    this.itemName = this.item.task;
  }

  deleteItem(item: Data): void {
    item.isDeleted = true;
    this.delete.emit(item);
  }

  saveItem(item: Data): void {
    this.save.emit(item)
  }
}
