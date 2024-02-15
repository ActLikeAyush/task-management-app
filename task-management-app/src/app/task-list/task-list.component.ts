// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-task-list',
//   standalone: true,
//   imports: [],
//   templateUrl: './task-list.component.html',
//   styleUrl: './task-list.component.css'
// })
// export class TaskListComponent {

// }



// src/app/task-list/task-list.component.ts
// src/app/task-list/task-list.component.ts
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = []; // Initialize with an empty array

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
}
