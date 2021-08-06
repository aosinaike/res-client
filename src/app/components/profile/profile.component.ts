import { Component, OnInit } from '@angular/core';
import {Researcher} from '../../models/Researcher';
import {AppService} from '../../services/AppService';
import {HttpClient} from "@angular/common/http";
import {forkJoin, Observable} from "rxjs";
import {WorkExperience} from "../../models/WorkExperience";
import {Research} from "../../models/Research";

@Component({
  selector: 'app-profile',
  providers: [AppService],
  templateUrl: 'profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  researcher: Observable<Researcher>;
  workExperiences: Observable<WorkExperience[]>;
  researches: Observable<Research[]>;

  constructor(private service: AppService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.researcher = this.service.getResource('http://localhost:9091/researcher/aosinaike');
    this.researcher.subscribe(val => console.log(val));
    if (this.researcher !== null) {
      this.workExperiences = this.service.getResource('https://localhost:9091/researcher/aosinaike/experience/all');
      this.researches = this.service.getResource('https://localhost:9091/researcher/aosinaike/research/all');

      forkJoin([this.workExperiences, this.researches]).subscribe(results => {
        console.log(results[0]);
        console.log(results[1]);
      });
    }
  }

}
