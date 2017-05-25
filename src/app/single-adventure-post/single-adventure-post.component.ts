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
  blogID: number;

  constructor(private journalDataService: JournalDataService, private router: Router, private active: ActivatedRoute) {

  console.log("single-adventure-post");
 }

  ngOnInit(): void {

    const currentID = this.active.params ['_value'] ['id'];
    //displays the current journal id
    console.log(currentID);
    const blogID = currentID;

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

    const syncID: Function = () => {
      const value:any = (a) => {
        console.log("naz");
        console.log(a.id);
        const aValue =  parseInt(a.id, 10) ==  this.blogID;
        console.log(a);
        return a;
      };
      const newArray = this.journalList.allJournals.find(value);
      console.log("Sarah");
      console.log(this.journalList.allJournals);
      console.log(this.blogID);

      // console.log(newArray);
      //this.currentAdventure = newArray;

      this.newJournal(newArray);
      //this.renderView(newArray);
       //return newArray;}
     }
    const resolveData: any = Promise.resolve(myPromiseOfJournals.then(extractDataFromPromise).then( (active) => { this.journalList = active } ).then(syncID)); //addsmetinghere??

    }
    newJournal(newArray){
    this.currentJournal = newArray;
  }
}
