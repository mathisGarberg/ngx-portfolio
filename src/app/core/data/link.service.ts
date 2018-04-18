import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let counter = 0;

@Injectable()
export class LinkService {

    private links = [
        {
            id: 1,
            name: 'Github projects',
        },
        {
            id: 2,
            name: 'Medium Publications'
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