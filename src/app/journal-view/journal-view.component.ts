import { Component, OnInit } from '@angular/core';

//importing model/service
import { JournalList } from '../model/journal.list';
import { Journal } from '../model/journal';
import { JournalDataService } from '../service/journal-data.service';
import { JournalResponse } from '../model/journal-response';


@Component({
  selector: 'app-journal-view',
  templateUrl: './journal-view.component.html',
  styleUrls: ['./journal-view.component.css']
})

export class JournalViewComponent implements OnInit {

  currentJournal: Journal;
  journallist: JournalList;

  constructor(private journalDataService: JournalDataService ) {
  // console.log('Journal View');
}

  ngOnInit(): void {
    // console.log("showing journal view");

    const myPromiseOfJournals: any = this.journalDataService.getJournals();

    // console.log(myPromiseOfJournals);

    const extractDataFromPromise: Function = (response) => {
      // console.log("extract data");
      console.log(response);

      let myList: JournalResponse = <JournalResponse> response as JournalResponse;
      let newList = new JournalList();
      for (const entry in myList){
        let newJournal = new Journal();
        switch (entry) {
          case "count":
          myList.count = parseInt (newJournal['count'], 10); //count entry
          break;

          default:
          newJournal.id= myList[entry]['ID'];
          newJournal.title= myList[entry]['title'];
          newJournal.content= myList[entry]['content'];
          newJournal.category= myList[entry]['category'];
          newJournal.image=myList[entry]['image'];
          newJournal.date= myList[entry]['date'];
          newJournal.author= myList[entry]['author'];
          newList.journals[entry] = newJournal;
          break;
        }
        newList.journals.push(newJournal);
      }
      // console.log ("myList");
      console.log(newList.journals);
      this.journallist = newList;
      this.anything (this.journallist);
      return newList;
    }
    const resolveData: any = Promise.resolve(myPromiseOfJournals.then(extractDataFromPromise));
  }
  anything (something){
    console.log(something);
  }
}
