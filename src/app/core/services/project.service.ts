import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

export { Project } from '@app/shared';

const routes = {
  projects: `/projects`,
  project: (id: number) => { return `/projects/${id}` }
};

@Injectable()
export class ProjectService {

  constructor(private httpClient: HttpClient) { }

  getAllProjects(): Observable<any> {
    return this.httpClient
      // .cache()
      .get(routes.projects)
      .pipe(
        map((body: any) => body),
        catchError(() => of('Error, could not load data'))
      );
  }

  getSingleProject(id: number): Observable<any> {
    return this.httpClient
      // .cache()
      .get(routes.project(id))
      .pipe(
        map((body: any) => body),
        catchError(() => of('Error, could not load data'))
      )
  }

}
