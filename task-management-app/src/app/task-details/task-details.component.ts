// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-task-details',
//   standalone: true,
//   imports: [],
//   templateUrl: './task-details.component.html',
//   styleUrl: './task-details.component.css'
// })
// export class TaskDetailsComponent {

// }






import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
})
export class TaskDetailsComponent implements OnInit {
  @Input()
  task!: Task;

  constructor() {}

  ngOnInit(): void {}
}