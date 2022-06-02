import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  booleantype: boolean = true;
  constructor() {}

  ngOnInit(): void {
    this.booleantype = true;
  }
  ngOnDestroy(): void {
    this.booleantype = false;
  }
}
