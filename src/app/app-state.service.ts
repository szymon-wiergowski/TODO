import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Data } from './models/models';
import { MockData } from './mock_data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  constructor() { }
  public items: Data[] = MockData;

  getTasks(): Observable<Data[]> {
    return of(this.items);
  }

  saveTask(newTask: Data): void {
    const updateItem = this.items.find(el => el.id === newTask.id);
    if (newTask.task) {
      updateItem.task = newTask.task;
    }
    updateItem.isCompleted = true;
  }

  deleteTask(id: string): void {
    const deleteItem = this.items.find(el => el.id === id);
    deleteItem.isDeleted = true;
  }

  addTask(newTask: Data): void {
    console.log(newTask);

    this.items.push(newTask);
    console.table(this.items);

  }
}
