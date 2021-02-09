import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';

import { AppStateService } from '../app-state.service';
import { Data } from '../models/data';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit, OnDestroy {
  constructor(private State: AppStateService) { }
  @Input() item: string;
  @Input() displayCompleted: Subject<boolean>;
  public tasks: Data[];
  public nonDeleted: Data[];
  public onlyDoneTasks: Data[];
  private subscription$: Subscription;

  ngOnInit(): void {
    this.subscription$ = this.State.getTasks().subscribe(res => {
      this.tasks = res;
    });
  }

  saveItem(item: Data) {
    const saveSubscription = this.State.saveTask(item).subscribe(res => {
      this.tasks = res;
    });
    this.subscription$.add(saveSubscription);
  }

  deleteItem(item: Data) {
    const delSubscription = this.State.deleteTask(item).subscribe(res => {
      this.tasks = res;
    });
    this.subscription$.add(delSubscription);
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
