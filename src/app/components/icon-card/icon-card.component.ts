import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-card',
  templateUrl: './icon-card.component.html',
  styleUrls: ['./icon-card.component.scss']
})
export class IconCardComponent implements OnInit {

  @Input()
  public klass: string | string[] | Set<string> | {
    [klass: string]: any;
  };

  @Input()
  public title: string;

  @Input()
  public icon: string;

  @Input()
  public body: string;

  constructor() { }

  ngOnInit(): void {
  }

}
