import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public readonly someData$ = new BehaviorSubject('some test data from service');

  constructor() { }
}
