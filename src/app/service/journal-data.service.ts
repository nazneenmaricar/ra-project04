import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Journal } from '../model/journal';
import { JournalList } from '../model/journal.list';

@Injectable ()
export class JournalDataService {
  journalsUrl = "http://portal.helloitscody.com/inhabitent/api/get/94a08da1fecbb6e8b46990538c7b50b2/";


  constructor (private http: Http) { }
  getJournals(): Promise<Journal[]> {
    console.log ('in getJournals() method of JournalDataService');

    let newPromise: any =
    this.http.get(this.journalsUrl)
    .toPromise ()
    .then (resp => { return resp.json();} )
    .catch( err=> {console.log(err)} );

    return newPromise;
  }
  handleError(error) {
    console.log(error);
  }
}
