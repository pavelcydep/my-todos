import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Todo,Todos} from '../Todo';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {
 
 

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
        
           }})
    }

   
}