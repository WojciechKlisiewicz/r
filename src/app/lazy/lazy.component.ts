import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrl: './lazy.component.scss'
})
export class LazyComponent implements OnInit {
  public serviceData$: Observable<string>|null = null;

  constructor(private readonly appService: AppService) {}

  ngOnInit() {
    this.serviceData$ = this.appService.someData$.asObservable();
  }
}
