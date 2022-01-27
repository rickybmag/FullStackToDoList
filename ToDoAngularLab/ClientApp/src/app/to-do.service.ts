import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from './ToDo';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  url: string = "ToDo";
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.url = baseUrl + this.url;
  }

  GetToDoList() {
    return this.http.get(this.url);
  }

  GetToDo(id: number) {
    return this.http.get(this.url + "/get/" + id);
  }

  CreateToDo(t: ToDo) {
    console.log(t);
    return this.http.post(this.url + "/makeNew/", t);
  }

  DeleteToDo(id: number) {
    return this.http.delete(this.url + "/delete/" + id);
  }

  UpdateToDo(newToDo: ToDo, id: number) {
    return this.http.put(this.url + "/update/" + id, newToDo);
  }
}
