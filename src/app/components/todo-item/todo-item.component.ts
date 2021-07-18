import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  
  @Input() test:any;
  @Output() deleteItemId = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(pValue:any):any {
    this.deleteItemId.emit(pValue);
  }

}
