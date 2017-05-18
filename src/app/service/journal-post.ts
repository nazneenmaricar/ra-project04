import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Journal } from '../model/journal';
import { JournalList } from '../model/journal.list';


@Injectable ()
export class JournalPost {

  postUrl = "http://portal.helloitscody.com/inhabitent/api/post/94a08da1fecbb6e8b46990538c7b50b2";

  constructor (private http: Http){
   console.log ("JournalPost");}

   postJournals (){}
}
