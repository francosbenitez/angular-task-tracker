import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs'
import { Observable } from 'rxjs'
import { Task } from '../Task'
// import { TASKS } from '../mock-tasks'

// This is only part of Angular. It has an HTTP client included
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http: HttpClient) {}

  // We create a function here
  getTasks(): Observable<Task[]> {
    // const tasks = of(TASKS)
    // return tasks
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)
  }

}
