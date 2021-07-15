import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import{Task} from '../../Task';
// import {TASKS} from '../../Mock-task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task) { 
  console.log(task)
  var tasks : Task[] = [];
    this.taskService
    .deleteTask(task) 
    .subscribe(() => (
      // console.log(task)
      this.tasks = this.tasks.filter((t) => t.id !== task.id)

   
    
    ));

  }

addTask(task:Task) {
  this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));
}


toggleReminder(task: any) {
  task.reminder = !task.reminder;
  // console.log(task.reminder);
  this.taskService.updateTaskReminder(task).subscribe()
}

}
