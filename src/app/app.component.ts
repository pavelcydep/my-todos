import { Component } from '@angular/core';
import {Todo,Todos} from './Todo';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  //toggle = false;
  public selected='';

  public text = '';
 
  
  public isCompleted="";
  public todoList!: Todo[];
  public todos!: Todos[];
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


    onCreate():void{
      if(this.text){
        this.httpClient.post<Todo>('https://intense-plateau-06126.herokuapp.com/categories/'+this.selected+'/todos',
        {"todos": { text:this.text,"isCompleted":"false" }
          
        })
        .subscribe(todo=>{
          this.todoList.concat(todo);
          location.reload();
         })
    this.text="";
    this.selected="";
   
      }
    }
      onComplete(onComplete:Todos):void {          
  
        this.httpClient.put<Todos[]>('https://intense-plateau-06126.herokuapp.com/categories/2/todos/'+onComplete.id , {todos:{isCompleted:onComplete.isCompleted}})
        .subscribe(todos=>{
         
          {
            this.todos=todos;
          console.log(todos)
           }})
    }
    /*onRemove(onRemove:Todos):void {          
  
      this.httpClient.delete<Todos[]>('https://intense-plateau-06126.herokuapp.com/categories/2/todos/'+onRemove.id )
      .subscribe(()=>{
       
        {
          this.todoList= this.todoList.filter(todo=>todo.id !== onRemove.id)
          }})
  }*/

  onRemove(onRemove:Todos, todos: Todo):void {          
    this.httpClient.delete<Todos[]>('https://intense-plateau-06126.herokuapp.com/categories/'+todos.id+'/todos/'+onRemove.id )
        .subscribe(()=>{
            todos.todos = todos.todos.filter(todo=>todo.id !== onRemove.id)
        })
    }
   
}


  

