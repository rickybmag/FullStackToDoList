import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { ToDo } from '../ToDo';

@Component({
  selector: 'app-crudto-do',
  templateUrl: './crudto-do.component.html',
  styleUrls: ['./crudto-do.component.css']
})
export class CRUDToDoComponent implements OnInit {

  todos?: ToDo[] = [];
  constructor(private toDoService: ToDoService) {
    this.toDoService.GetToDoList().subscribe(
      (response: any) => { this.todos = response }
    )
  }

  ngOnInit() {
  }

  DeleteToDo(id: number, index: number) {
    this.toDoService.DeleteToDo(id).subscribe(
      (response: any) => {
        console.log(id + "was removed from the task list");
        this.todos.splice(index, 1);
      }
    );
  }

  UpdateToDo(id: number) {
    let displayPanel = document.getElementById("display" + id);
    let updatePanel = document.getElementById("update" + id);

    if (displayPanel.style.display === "" || displayPanel.style.display === "inherit") {
      displayPanel.style.display = "none";
      updatePanel.style.display = "inherit";
    }
    else if (displayPanel.style.display === "none") {
      displayPanel.style.display = "inherit";
      updatePanel.style.display = "none";
    }
  }

}
