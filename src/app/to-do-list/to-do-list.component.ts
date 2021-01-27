import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';

import { AppStateService } from '../app-state.service';
import { Data } from '../models/models';

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
  public doneTask: Data[];
  public allTask: Data[];
  private getTasksSubscription: Subscription;
  private getCompletedTasks: Subscription;

  ngOnInit(): void {
    this.getTasksSubscription = this.State.getTasks().subscribe(res => {
      this.tasks = res,
      this.doneTask = this.tasks.filter(items => items.isDeleted === false),
      this.allTask = this.tasks;
    });

    this.getCompletedTasks = this.displayCompleted.subscribe(res => {
      if (res === true){
        this.tasks = this.doneTask.filter(items => items.is_completed === 1);
      }else{
        this.tasks = this.allTask;
      }
    });
  }

  ngOnDestroy(){
    this.getTasksSubscription.unsubscribe();
    this.getCompletedTasks.unsubscribe();
  }
}
