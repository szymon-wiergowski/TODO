import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Data } from './models/models';
import { MockData } from './mock_data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private url = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) { }
  public items: Data[] = MockData;

  getTasks(): Observable<Data[]> {
    return this.http.get<Data[]>(this.url).pipe(tap(console.table));
  }

  saveTask(newTask: Data): void {
    let updateItem = this.items.find(el => el.id === newTask.id);
    updateItem = newTask;
  }

  deleteTask(id: string): void {
    const deleteItem = this.items.find(el => el.id === id);
    deleteItem.isDeleted = true;
  }

  addTask(newTask: Data): void {
    this.items.push(newTask);
  }
}
