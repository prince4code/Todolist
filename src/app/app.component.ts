import { Component } from '@angular/core';
import {Todo} from './todo';
import { ThrowStmt } from '@angular/compiler';

 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  item:string;

  title:string ="Todolist"

   
 


  list = [] ;

  hobbie = ["book","games","coding","running"] ;




  submit(){
    this.list.push(new Todo(this.item));
  
    console.log(this.list);
    

  }

}