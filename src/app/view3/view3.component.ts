import { Component, OnInit } from '@angular/core';
import { DemoImageSourceService } from '../services/demo-image-source.service';

@Component({
  selector: 'app-view3',
  templateUrl: './view3.component.html',
  styleUrls: ['./view3.component.scss']
})
export class View3Component implements OnInit {
  public demoImageSourceTable1: any[] = [];

  constructor(
    private demoImageSourceService: DemoImageSourceService,
  ) {}

  ngOnInit() {
    this.demoImageSourceTable1 = this.demoImageSourceService.getData('Table 1');
  }
}
