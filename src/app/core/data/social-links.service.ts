import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let counter = 0;

@Injectable()
export class SocialLinksService {

  private socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/mathisGarberg'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/feed/?trk='
    },
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/users/4228322/mathis-garberg?tab=profile'
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@mathis.garberg'
    }
  ];

  private socialLinksArray: any[];

  constructor() { }

  getAll(): Observable<any> {
    return Observable.of(this.socialLinks);
  }

  getArray(): Observable<any[]> {
    return Observable.of(this.socialLinks);
  }

  getSingle(): Observable<any> {
    counter = (counter + 1) % this.socialLinksArray.length;
    return Observable.of(this.socialLinksArray[counter]);
  }

}
