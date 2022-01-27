import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { ToDo } from '../ToDo';

@Component({
  selector: 'app-create-to-do',
  templateUrl: './create-to-do.component.html',
  styleUrls: ['./create-to-do.component.css'],
  providers: [ToDoService]
})
export class CreateToDoComponent implements OnInit {

  constructor(private toDoServie: ToDoService) { }

  ngOnInit() {
  }
  CreateToDo() {
    let name: string = (<HTMLInputElement>document.getElementById("Name")).value;
    console.log(name);
    let description: string = (<HTMLInputElement>document.getElementById("Description")).value;
    console.log(description);

    let newToDo: ToDo = { id: 0, name: name, description: description, completed: false };
    this.toDoServie.CreateToDo(newToDo).subscribe();
  }
}
