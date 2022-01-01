import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { Task } from '../Task'
import { TASKS } from '../mock-tasks'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  // We create a function here
  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS)
    return tasks
  }
}
