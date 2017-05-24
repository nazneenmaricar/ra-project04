import { Component, OnInit } from '@angular/core';
//importing model/service
import { JournalList } from '../model/journal.list';
import { Journal } from '../model/journal';
import { JournalDataService } from '../service/journal-data.service';
import { JournalResponse } from '../model/journal-response';

@Component({
  selector: 'app-adventure-blog',
  templateUrl: './adventure-blog.component.html',
  styleUrls: ['./adventure-blog.component.css']
  //styleUrls: ['../../projectstyle.css']
})

export class AdventureBlogComponent implements OnInit {
  currentJournal: Journal;
  journalList: JournalResponse;

  constructor(private journalDataService: JournalDataService ) {
  // console.log('Journal View');
}

  ngOnInit(): void {
    // console.log("showing journal view");
    const myPromiseOfJournals: any = this.journalDataService.getJournals();
    // console.log(myPromiseOfJournals);
    const extractDataFromPromise: Function = (response) => {
      console.log("EXTRACTING DATA");
      console.log(response);

      let myList: JournalResponse = <JournalResponse> response as JournalResponse;
      let newList = new JournalResponse();
      let newCount:number = 0;
      for (const entry in myList){
        let newJournal = new Journal();
        switch (entry) {
          case "count":
          newCount= myList['count'];
           newList.count = newCount;
          // myList.count = parseInt (newJournal['count'], 10); //count entry
          break;

          default:
          let newJournal= new Journal();
          newJournal.id= myList[entry]['ID'];
          newJournal.title= myList[entry]['title'].replace(/&#039;/g, `'`);
          newJournal.content= myList[entry]['content'].replace(/&#039;/g, `'`);
          newJournal.category= myList[entry]['category'];
          newJournal.image=myList[entry]['image'];
          newJournal.date= myList[entry]['date'];
          newJournal.author= myList[entry]['author'];
          // newList.journals[entry] = newJournal;
          newList.allJournals.push(newJournal);
          break;
        }
        // newList.journals.push(newJournal);
      }
      console.log ("OBJECTS TO JOURNALS");
      console.log(newList.allJournals);
      this.journalList = newList;
      this.anything (this.journalList);
      return newList;
    }
    const resolveData: any = Promise.resolve(myPromiseOfJournals.then(extractDataFromPromise)); //add somethinghere?
  }
  anything (something){
    console.log("JOURNAL LIST");
    console.log(something);
  }
}
