import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Journal } from '../model/journal';
import { JournalList } from '../model/journal.list';

@Injectable ()
export class JournalDataService {

  journalsUrl = "http://portal.helloitscody.com/inhabitent/api/get/94a08da1fecbb6e8b46990538c7b50b2/";

  private postJournalUrl = "http://portal.helloitscody.com/inhabitent/api/post/94a08da1fecbb6e8b46990538c7b50b2";

  constructor (private http: Http) { };

  getJournals(): any {
    // console.log ("JournalDataService");

    const getTheData = this.http.get(this.journalsUrl);
    const newPromise: any = getTheData.toPromise();
    const successFn: Function = resp => { return resp.json(); };
    const failureFn: Function = err => { console.log(err) };
    const resolvedPromise: any = Promise.resolve(newPromise.then(successFn).catch(failureFn));
    return resolvedPromise;
  }

  postJournal(): any {
    console.log("postJournal");
    // this.postJournalUrl= this.journalPostUrl + "params=" + params;



  }
}
