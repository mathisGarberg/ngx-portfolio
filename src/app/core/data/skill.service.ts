import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let counter = 0;

@Injectable()
export class SkillService {

  private skills = [
    {
      headline: 'UX Designer',
      description: 'I value simple content structure, clean design patterns, and thoughtful interactions.'
    },
    {
      headline: 'Fullstack development',
      description: 'I tend to code things from scratch, and enjoy bringing ideas to life in the browser.'
    }
  ];

  private skillArray: any[];

  constructor() { }

  getAll(): Observable<any> {
    return Observable.of(this.skills);
  }

  getArray(): Observable<any[]> {
    return Observable.of(this.skills);
  }

  getSingle(): Observable<any> {
    counter = (counter + 1) % this.skillArray.length;
    return Observable.of(this.skillArray[counter]);
  }

}
