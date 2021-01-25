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

  saveTask(id: string, done: number, name?: string): void {
    const updateItem = this.items.find(el => el.id === id);
    if (name){
      updateItem.task = name;
    }
    updateItem.is_completed = done;
  }

  deleteTask(id: string): void {
    const updateItem = this.items.find(el => el.id === id);
    updateItem.isDeleted = true;
    console.log(this.items);
  }

  addTask(newTask: Data): void {
    const {id, task, is_completed } = newTask;
    this.items.push(
      {
        id,
        candidate: 'szymon.wiergowski',
        task,
        is_completed,
        isDeleted: false
      }
    );
    console.log(this.items);
  }
}
