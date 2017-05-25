import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Journal } from '../model/journal';
import { JournalList } from '../model/journal.list';

@Injectable ()
export class JournalDataService {

  private journalsUrl = "http://portal.helloitscody.com/inhabitent/api/get/94a08da1fecbb6e8b46990538c7b50b2/";

  private postJournalUrl = "http://portal.helloitscody.com/inhabitent/api/post/94a08da1fecbb6e8b46990538c7b50b2";

  private headers = new Headers ({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});

  constructor (private http: Http) { };

  getJournals(): any {
    //console.log ("JournalDataService");
    const getTheData = this.http.get(this.journalsUrl);
    const newPromise: any = getTheData.toPromise();
    const successFn: Function = resp => { return resp.json(); };
    const failureFn: Function = err => { console.log(err) };
    const resolvedPromise: any = Promise.resolve(newPromise.then(successFn).catch(failureFn));
    return resolvedPromise;
  }

  postJournals(params: any): Promise<any> {
     console.log("postJournal");
     const postUrl = this.postJournalUrl + "?params=" + params;
     console.log(params);
     console.log(postUrl);
     console.log("%%%%%%%");
     //debugger;
     const responseFn: any = res => {
       console.log(res);
       console.log(res[`_body`]);
       const x = (res[`_body`]);
       const status = x.indexOf("post_created");
       //indexof with a value 0 is true and -1 is false
       if (status >= 0){
         alert("Post has been successfully created!");
        }

        else {
         alert("Error! Failed to create the post!");
        }
     };

     const postProcess = this.http.post(postUrl, params);
     //, {headers: this.headers});

     const whatToDoNext= postProcess.toPromise().then(responseFn).catch(this.handlerError);

      // let theNextStep = Promise.resolve(theNextStep);
      const theNextStep = Promise.resolve();
        return theNextStep ;
      }
      handlerError(error){
        console.log("error");
        //windows.alert ("Error");
        //blah
      }

    getJournalsById(id): any {
      const getTheData = this.http.get(this.journalsUrl);
      const newPromise: any = getTheData.toPromise();
      const successFn: Function = resp => { return resp.json();};
      const failureFn: Function = err => {console.log(err)};
      const resolvedPromise: any = Promise.resolve(newPromise.then(successFn).catch(failureFn));
      console.log("Journals By Id");
      console.log(id);
      return resolvedPromise;
      }
}
