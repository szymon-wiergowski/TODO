import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  constructor() { }
  @Input() appTitle: string;
  @Input() isAddTask: boolean;
  @Output() newTask: EventEmitter<null> = new EventEmitter();
  @Output() showCompl: EventEmitter<null> = new EventEmitter();
  public isHide: boolean;

  ngOnInit(): void {
  }

  addTask(): void {
    this.newTask.emit(null);
  }

  showCompleted(): void {
    this.showCompl.emit(null);
  }
}
