import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let counter = 0;

@Injectable()
export class SkillService {

  private skills = [
    {
      headline: 'Frontend utvikling',
      description: `Det er uten tvil frontend utvikling som jeg har mest erfaring med. HTML, 
                    CSS og JavaScript var noe av det første vi lærte på studiet jeg gikk.`
    },
    {
      headline: 'Backend utvikling',
      description: `Stor erfaring med PHP, MySQL. Bruker for tiden mest Node.`
    },
    {
      headline: 'Kommunikasjon',
      description: `Det er ...`
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
