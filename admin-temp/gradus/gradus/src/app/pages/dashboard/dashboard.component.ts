import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { SortingComponent } from '../tables/sorting/sorting.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public settings: Settings;
  constructor(public appSettings:AppSettings){
    this.settings = this.appSettings.settings; 
  }

  ngOnInit() {
  }

}
