import { Injectable } from '@angular/core';
import { DataSource2 } from './data-source-2';

@Injectable({
  providedIn: 'root'
})
export class DataSource2Service {
  getData(tableName: string): any[] {
    return DataSource2[tableName];
  }
}
