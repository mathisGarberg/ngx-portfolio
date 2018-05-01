import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

const routes = {
  category: (id: string) => { return `/category/${id}` }
};


@Injectable()
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getProjects(id: string): Observable<any> {
    return this.httpClient
      // .cache()
      .get(routes.category(id))
      .pipe(
        map((body: any) => body),
        catchError(() => of('Error, could not load data'))
      )
  }

}
