import { Component, Input, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { ToDo } from '../ToDo';

@Component({
  selector: 'app-update-to-do',
  templateUrl: './update-to-do.component.html',
  styleUrls: ['./update-to-do.component.css'],
  providers: [ToDoService]
})
export class UpdateToDoComponent implements OnInit {

  @Input() Id: number;
  todo: ToDo;
  constructor(private toDoService: ToDoService) { }

  ngOnInit() {

    this.toDoService.GetToDo(this.Id).subscribe(
      (response: any) => {
        console.log(response);
        this.todo = response;
      }
    );
  }

  UpdateToDo() {
    let name: string = (<HTMLInputElement>document.getElementById("Name" + this.Id)).value;
    console.log(name);
    let description: string = (<HTMLInputElement>document.getElementById("Description" + this.Id)).value;
    console.log(description);
    let isCompleted: string = (<HTMLInputElement>document.getElementById("Completed" + this.Id)).value;
    let completed: boolean = (isCompleted == "true");

    let newToDo: ToDo = { id: this.Id, name: name, description: description, completed: completed };

    this.toDoService.UpdateToDo(newToDo, this.Id).subscribe(
      (response: any) => {
        location.reload()
      }
    );
  }
}
