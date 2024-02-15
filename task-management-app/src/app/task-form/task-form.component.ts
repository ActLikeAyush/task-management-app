// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-task-form',
//   standalone: true,
//   imports: [],
//   templateUrl: './task-form.component.html',
//   styleUrl: './task-form.component.css'
// })
// export class TaskFormComponent {

// }




import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  // Implement form logic here

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  // Implement form submission and validation logic here
}