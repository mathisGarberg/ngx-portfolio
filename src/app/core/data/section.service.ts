import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let counter = 0;

@Injectable()
export class SectionService {

    private sections = [
        {
            title: 'Category',
            links: [
                {
                    id: 1,
                    name: 'Games',
                    link: 'games'
                },
                {
                    id: 2,
                    name: 'Web Development',
                    link: 'web-development'
                }
            ]
        },
        {
            title: 'Technologies',
            links: [
                {
                    id: 1,
                    name: 'AngularJS',
                    link: ''
                },
                {
                    id: 2,
                    name: 'Plain JavaScript',
                    link: ''
                },
                {
                    id: 1,
                    name: 'rest',
                    link: ''
                },
                {
                    id: 2,
                    name: 'pest',
                    link: ''
                }
            ]
        },
        {
            title: 'Tags',
            links: [
                {
                    id: 1,
                    name: 'AngularJS',
                    link: 'angularjs'
                },
                {
                    id: 2,
                    name: 'Plain JavaScript',
                    link: 'javascript'
                },
                {
                    id: 1,
                    name: 'rest',
                    link: ''
                },
                {
                    id: 2,
                    name: 'pest',
                    link: ''
                }
            ]
        }
    ];

    private sectionArray: any[];

    getLinks(): Observable<any> {
        return Observable.of(this.sections);
    }

    getLinkArray(): Observable<any[]> {
        return Observable.of(this.sectionArray);
    }

    getLink(): Observable<any> {
        counter = (counter + 1) % this.sectionArray.length;
        return Observable.of(this.sectionArray[counter]);
    }

}