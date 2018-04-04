import { TaskService } from './../../services/task.service';
import { Task } from './../../classes/Task';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})
export class NewtaskComponent implements OnInit {

  constructor(private taskService: TaskService, private router: Router) { }

  newTask: Task = new Task();

  public taskForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  ngOnInit() {
  }

  doSave(event: any) {
    if (this.taskForm.valid) {
      let val = this.taskForm.value;

      if (val) {
        this.newTask.name = val.name;
        this.newTask.description = val.description;
        this.newTask.status = 0;
      }

      this.taskService.createTask(this.newTask).subscribe(
        data => this.router.navigateByUrl("/home"),
        error => console.log(error)
      );;
      
    }
  }

}
