import { Component, OnInit } from '@angular/core';
import {AppService} from "../../services/AppService";

@Component({
  selector: 'app-dashboard',
  providers: [AppService],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
