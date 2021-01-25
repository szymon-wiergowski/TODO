import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Data } from './models/models';
import { MockData } from './mock_data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  public items: Data[] = MockData;
  constructor() { }
  

  getTasks(): Observable<Data[]> {
    return of(this.items);
  }

  saveTask(id: string, done: number, name?: string) {
    let updateItem = this.items.find(el => el.id === id);
    if(name){
      updateItem.is_completed = done;
      updateItem.task = name;
    }else {
      updateItem.is_completed = done;
    }
  }

  deleteTask(id: string) {
    let updateItem = this.items.find(el => el.id === id);
    updateItem.isDeleted = true;
  }

  addTask(idNUm: string, done: number, name: string){
    this.items.push({id: idNUm, candidate: "szymon.wiergowski", task: name, is_completed: done, isDeleted: false});
  }
}
