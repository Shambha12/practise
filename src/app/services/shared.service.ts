import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  subject$ = new BehaviorSubject<any>('Rohit');
  subjectObservable$ = this.subject$.asObservable();

  constructor() {}

  sendData(data: any) {
    this.subject$.next(data);
  }
}
