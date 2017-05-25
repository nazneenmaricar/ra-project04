import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { JournalList } from '../model/journal.list';
import { Journal } from '../model/journal';
import { JournalDataService }  from '../service/journal-data.service';
import { JournalResponse } from '../model/journal-response';


@Component({
  selector: 'app-adventure-list',
  templateUrl: './adventure-list.component.html',
  styleUrls: ['./adventure-list.component.css']
})
export class AdventureListComponent implements OnInit {

  currentJournal: Journal;
  journalList: JournalResponse;
  currentpost:Journal;
  blogID: number

  constructor(private journalDataService: JournalDataService, private router: Router, private active: ActivatedRoute) { }

  ngOnInit() {

    const myPromiseOfJournals: any = this.journalDataService.getJournals();
    //console.log(myPromiseOfJournals);
    const extractDataFromPromise: Function = (response) => {
      console.log("EXTRACTING DATA");
      console.log (response);

      let myList : JournalResponse = <JournalResponse> response as JournalResponse;
      let newList = new JournalResponse();
      let newCount:number = 0;
      for (const entry in myList){
        // let newJournal = new Journal ();
        switch (entry) {
          case "count":
          newCount = myList['count'];
          newList.count = newCount
          //parseInt (newJournal['count'], 10);
          break;

          default:
          let newJournal= new Journal();
          newJournal.id= myList[entry]['ID'];
          newJournal.title= myList[entry]['title'].replace(/&#039;/g, `'`);
          newJournal.content= myList[entry]['content'].replace(/&#039;/g, `'`);
          newJournal.categories= myList[entry]['categories'];
          newJournal.image=myList[entry]['image'];
          newJournal.date= myList[entry]['date'];
          newJournal.author= myList[entry]['author'];
          // newList.journals[entry] = newJournal;
          newList.allJournals.push(newJournal);
          break;
        }
      }
          console.log("Blogs");
          console.log(newList.allJournals);
          this.journalList = newList;
          //this.anything (this.journalList);
          return newList;
        }
        const resolveDetails: any = Promise.resolve(myPromiseOfJournals.then(extractDataFromPromise));
        //.then( (active) => { this.journalList = active } )
}
}
