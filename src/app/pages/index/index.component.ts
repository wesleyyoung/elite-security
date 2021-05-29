import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public isMobile: boolean = this.api.isMobileWatcher;
  public isMedium: boolean = this.api.isMediumWatcher;

  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.api.isMobile.subscribe(isMobile => {
      this.isMobile = isMobile;
    });

    this.api.isMedium.subscribe(isMed => {
      this.isMedium = isMed;
    });
  }

}
