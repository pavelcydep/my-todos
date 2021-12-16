import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Todo,Todos} from '../Todo';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public toggle=false;
@Input() todoList!: Todo[];
@Input() todos!: Todos[];

  ngOnInit(): void { 
  }

 
 
 isCompleted="";
 selected="";
 text="";
 
 private httpClient:HttpClient;
   constructor(httpClient:HttpClient) { 
     this.httpClient= httpClient;
   }
  
  
   public popupToggle(){
  this.toggle=!this.toggle;
  console.log(this.todoList);
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
  console.log(this.todoList)
     }
   }

}

