import { Component, OnInit } from '@angular/core';
import {AppService} from "../../services/AppService";

@Component({
  selector: 'app-research',
  providers: [AppService],
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
