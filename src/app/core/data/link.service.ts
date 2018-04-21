import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let counter = 0;

@Injectable()
export class LinkService {

    private links = [
        {
            id: 1,
            name: 'Medium Publications',
            routerLink: '/medium-publications'
        },
        {
            id: 2,
            name: 'Personal projects',
            routerLink: '/github-projects'
        }
    ]

    private linkArray: any[];

    getLinks(): Observable<any> {
        return Observable.of(this.links);
    }

    getLinkArray(): Observable<any[]> {
        return Observable.of(this.linkArray);
    }

    getLink(): Observable<any> {
        counter = (counter + 1) % this.linkArray.length;
        return Observable.of(this.linkArray[counter]);
    }

}