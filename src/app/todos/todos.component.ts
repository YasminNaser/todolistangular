import { Component } from '@angular/core';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent  {

  constructor() { }
  items:string[]=[
    'day1',
    'day2',
    'day3',
    'day4'
  ];

  additem(iteminput){
    this.items.splice(0,0,iteminput.value);
    iteminput.value = "";
  }
  removeItem(item){
    let index=this.items.indexOf(item);
    this.items.splice(index,1);
    
    
  }


}
