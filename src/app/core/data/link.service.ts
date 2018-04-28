import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let counter = 0;

@Injectable()
export class LinkService {

    private sections = [
        {
            title: 'Category',
            links: [
                {
                    id: 1,
                    name: 'Min'
                },
                {
                    id: 2,
                    name: 'Din'
                },
                {
                    id: 1,
                    name: 'Fin'
                }
            ]
        },
        {
            title: 'Tags',
            links: [
                {
                    id: 1,
                    name: 'fest'
                },
                {
                    id: 2,
                    name: 'pest'
                },
                {
                    id: 1,
                    name: 'rest'
                },
                {
                    id: 2,
                    name: 'pest'
                }
            ]
        }
    ];

    private linkArray: any[];

    getLinks(): Observable<any> {
        return Observable.of(this.sections);
    }

    getLinkArray(): Observable<any[]> {
        return Observable.of(this.linkArray);
    }

    getLink(): Observable<any> {
        counter = (counter + 1) % this.linkArray.length;
        return Observable.of(this.linkArray[counter]);
    }

}