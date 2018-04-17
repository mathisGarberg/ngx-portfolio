import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

const routes = {
  post: `/publications`
};

@Injectable()
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getAllPosts(): Observable<any> {
    return this.httpClient
      .cache()
      .get(routes.post)
      .pipe(
        map((body: any) => body.payload),
        catchError(() => of('Error, could not load data'))
      );
  }

}
