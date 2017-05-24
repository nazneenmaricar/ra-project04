import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
//importing model/service
// import { JournalList } from '../model/journal.list';
import { Journal } from '../model/journal';
import { JournalDataService }  from '../service/journal-data.service';
import { JournalResponse } from '../model/journal-response';

@Component({
  selector: 'app-single-adventure-post',
  templateUrl: './single-adventure-post.component.html',
  styleUrls: ['./single-adventure-post.component.css']
  //styleUrls: ['../../advcontentstyle.css']
})

export class SingleAdventurePostComponent implements OnInit {
  currentJournal: Journal;
  journalList: JournalResponse;
  currentpost:Journal;
  blogID: number

  constructor(private journalDataService: JournalDataService, private router: Router, private active: ActivatedRoute) {

  console.log("single-adventure-post");
 }

  ngOnInit(): void {

    // let xyz = this.active;
    // console.log(xyz);
    // let xyzParams: Params = xyz.params;
    // let currentID= xyzParams['_value'] ['id'];
    // // console.log(_value);
    // this.blogID = currentID;

    //console.log("Nazneen");
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
          newJournal.category= myList[entry]['category'];
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

    // const matchID: Function = () => {
    //   let q = (x) => {
    //     console.log(this.journalID);
    //     console.log(x.id);
    //     console.log('------------------');
    //     let k =  parseInt(x.id, 10) ==  this.journalID;
    //     //console.log(k);
    //     return k;
    //   };
    //   let newArray = this.journalEntries.allJournals.find(q);
    //   console.log("LOGGING");
    //   console.log(this.journalEntries.allJournals);
    //   console.log(this.journalID);
    //   console.log(newArray);
    //   //this.currentAdventure = newArray;
    //
    //   this.someOtherFunction(newArray);
    //   //this.renderView(newArray);
    //    //return newArray;

  //   const resolveData: any = Promise.resolve(myPromiseOfJournals.then(extractDataFromPromise)); //addsmetinghere??
  //   }
  //   someOtherFunction(newArray){
  //   this.currentAdventure = newArray;
  // }
}
}
