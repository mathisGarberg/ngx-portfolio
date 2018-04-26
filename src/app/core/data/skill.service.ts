import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let counter = 0;

@Injectable()
export class SkillService {

  private skills = [
    {
      headline: 'Frontend utvikling',
      description: `Lorem ipsum`
    },
    {
      headline: 'Backend utvikling',
      description: `Lorem ipsum`
    },
    {
      headline: 'Backend utvikling',
      description: `Lorem ipsum`
    },
    {
      headline: 'Kommunikasjon',
      description: `Lorem ipsum`
    },
    {
      headline: 'Angular',
      description: `Det rammeverket jeg helt klart har mest erfaring med er Angular v.x. 
                    Dette er rammeverket jeg bruker i jobben min.`
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
