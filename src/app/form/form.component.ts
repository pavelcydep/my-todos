import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../Todo';
@Component({
  selector: 'app-form',
  template: `<li *ngFor="let todo of todoList">
  <input type="checkbox" name="isCompleted">
  <span>{{ todo.id }}</span>
  <span>Удоли</span>

</li>`,
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public todoList: Todo[];
  private httpClient:HttpClient;
    constructor(httpClient:HttpClient) { 
      this.httpClient= httpClient;
    }
  
    ngOnInit() {
     this.httpClient.get<Todo[]>('https://intense-plateau-06126.herokuapp.com/categories')
     .subscribe(todoList=>{
       this.todoList=todoList;
     })
    }


}
