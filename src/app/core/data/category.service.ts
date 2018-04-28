import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let counter = 0;

@Injectable()
export class CategoryService {

  private categories = [
    {
      id: 1,
      name: ''
    },
    {
      id: 2,
      name: ''
    },
    {
      id: 3,
      name: ''
    },
    {
      id: 4,
      name: ''
    }
  ];

  private categoryArray: any[];

  getCategories(): Observable<any> {
      return Observable.of(this.categories);
  }

  getCategoryArray(): Observable<any[]> {
      return Observable.of(this.categoryArray);
  }

  getCategory(): Observable<any> {
      counter = (counter + 1) % this.categoryArray.length;
      return Observable.of(this.categoryArray[counter]);
  }

}
