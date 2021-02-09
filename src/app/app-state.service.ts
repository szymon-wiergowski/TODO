import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Data } from './models/data';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private url = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Data[]> {
    return this.http.get<Data[]>(this.url).pipe(map((tasks: Data[]) => tasks.filter(task => task.isDeleted === false))).pipe(tap(console.log));
  }

  saveTask(newTask: Data): Observable<Data[]> {
    console.log('save');
    return this.http.put<Data[]>(`${this.url}/${newTask.id}`, newTask).pipe(tap(console.log));
  }

  deleteTask(newTask: Data): Observable<Data[]> {
    console.log('delete');
    return this.http.put<Data[]>(`${this.url}/${newTask.id}`, newTask).pipe(tap(console.log));
  }

  addTask(newTask: Data): Observable<Data> {
    return this.http.post<Data>(this.url, newTask).pipe(tap(console.log));
  }
}
