import { TaskModalComponent } from './components/tasklist/taskmodal/task-modal.component';
import { TaskService } from './services/task.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as primeng from 'primeng/primeng';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { TasklistComponent } from "app/components/tasklist/tasklist.component";
import { NewtaskComponent } from "app/components/newtask/newtask.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: TasklistComponent },
  { path: 'new', component: NewtaskComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    TasklistComponent,
    NewtaskComponent,
    TaskModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    primeng.DataTableModule,
    primeng.SharedModule,
    primeng.DropdownModule,
    primeng.DialogModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
