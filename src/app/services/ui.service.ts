import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {
private showAddTask: boolean = false;
private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void {
    console.log(1);
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask)
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
