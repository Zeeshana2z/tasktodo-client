import { TaskService } from './../../services/task.service';
import { Task } from './../../classes/Task';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  constructor(private taskService: TaskService) { }
  taskList: Task[];
  taskdetail: Task;
  displayModal = false;
  edit = false;

  ngOnInit() {
    this.getTasks();
  }

  clickedrow(event: any) {
    this.displayModal = true;
    this.taskdetail = event.data;
  }

  closedDialog() {
    this.displayModal = false;
    this.taskdetail = null;
    this.edit = false;
  }

  deleterow(data: Task) {
    this.taskService.deleteTask(data.id).subscribe(
        data => this.getTasks(),
        error => console.log(error)
    )
  }

  editrow(data: any) {
    this.edit = true;
    this.displayModal = true;
    this.taskdetail = data;
  }

  getTasks() {
    this.taskService.getTasks().subscribe(
      data => this.taskList = data
    );
  }


}
