import { Task } from './../../../classes/Task';
import { TaskService } from './../../../services/task.service';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { SelectItem } from "primeng/primeng";

@Component({
    selector: 'app-modal',
    templateUrl: './task-modal.component.html'
})
export class TaskModalComponent {

    constructor(private taskService: TaskService) { }
    @Input() display = false;
    @Input() data;
    taskdetail: Task = new Task();
    @Input() oneditclicked = false;
    @Output() closed = new EventEmitter();
    @Output() saveclick = new EventEmitter();
    @Output() clickedDeleteButton: EventEmitter<Task> = new EventEmitter<Task>();
    statuses: SelectItem[] = [{ label: 'PENDING', value: 'PENDING' }, { label: 'COMPLETED', value: 'COMPLETED' }]

    closedModel() {
        this.closed.emit();
        this.oneditclicked = false;
    }

    deleteTask() {
        this.clickedDeleteButton.emit(this.data);
        this.display = false;
    }

    editTask() {
        this.oneditclicked = true;
    }

    changedModel(event: any, field: string) {
        if (field === 'name') {
            this.taskdetail.name = event;
        } else if (field === 'status') {
            this.taskdetail.status = event;
        } else {
            this.taskdetail.description = event;
        }
    }

    saveTask() {
        this.setTaskDetail();
        this.taskService.updateTask(this.taskdetail).subscribe(
            data => {
                this.closedModel();
                this.saveclick.emit();
            },
            err => console.log(err)
        )
    }

    setTaskDetail() {
        this.taskdetail.id = this.data.id;
        this.taskdetail.name = (this.taskdetail.name) ? this.taskdetail.name : this.data.name;
        this.taskdetail.status = (this.taskdetail.status) ? this.taskdetail.status : this.data.status;
        this.taskdetail.description = (this.taskdetail.description) ? this.taskdetail.description : this.data.description;
    }
}
