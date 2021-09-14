import { Injectable } from '@angular/core';
import { DemoImageSource } from './demo-image-source';

@Injectable({
  providedIn: 'root'
})
export class DemoImageSourceService {
  getData(tableName: string): any[] {
    return DemoImageSource[tableName];
  }
}
