import { Task } from './../classes/Task';
import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class TaskService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:8080/task';

  public getTasks(): Observable<Task[]> {
    return this.http.get(this.baseUrl);
  }

  public createTask(body: Task) {
    return this.http.post(this.baseUrl, body);
  }

  public deleteTask(id: number) {
    return this.http.delete(this.baseUrl+ '/' + id, {responseType: 'text'});
  }

  public updateTask(body:Task) {
    return this.http.put(this.baseUrl,body);
  }

}
