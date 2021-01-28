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
  public nonDeleted: Data[];
  public onlyDoneTasks: Data[];
  private getTasksSubscription: Subscription;
  private getCompletedTasks: Subscription;

  ngOnInit(): void {
    this.getTasksSubscription = this.State.getTasks().subscribe(res => {
      this.tasks = res;
    });

    this.getCompletedTasks = this.displayCompleted.subscribe(res => {
      if (res === true){
        this.tasks = this.nonDeleted.filter(items => items.isCompleted === true);
        console.table(this.tasks);
      }else{
        this.tasks = this.nonDeleted;
        console.table(this.tasks);
      }
    });
  }

  ngOnDestroy(){
    this.getTasksSubscription.unsubscribe();
    this.getCompletedTasks.unsubscribe();
  }
}
