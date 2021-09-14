import { Component, OnInit } from '@angular/core';
import { DataSource2Service } from '../services/data-source-2.service';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.scss']
})
export class View2Component implements OnInit {
  public dataSource2Table1: any[] = [];

  constructor(
    private dataSource2Service: DataSource2Service,
  ) {}

  ngOnInit() {
    this.dataSource2Table1 = this.dataSource2Service.getData('Table 1');
  }
}
