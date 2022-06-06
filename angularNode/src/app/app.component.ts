import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angularNode';

  constructor(private service: ApiserviceService) {}

  ngOnInit() {
    /* TODO document why this method 'ngOnInit' is empty */
  }
}
