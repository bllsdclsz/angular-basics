import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  title:string = 'Todo App';
  todos:any = [{ id : 1, todo : "alisverise git"}, { id : 2, todo : "ödevlerini yap"}];

  constructor() { }

  ngOnInit(): void {
  }

  delete(pTest:any):any {
    console.log(pTest);
    this.todos = this.todos.filter((element:any) => element.id !== pTest.id);
    this.todos;
  }

}
