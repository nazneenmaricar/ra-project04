import { Component, OnInit } from '@angular/core';

//importing model
import { JournalList } from '../model/journal.list';
import { Journal } from '../model/journal';

//importing serivce
import { JournalDataService} from '../service/journal-data.service'

@Component({
  selector: 'app-journal-view',
  templateUrl: './journal-view.component.html',
  styleUrls: ['./journal-view.component.css']
})

export class JournalViewComponent implements OnInit {

  constructor(private journalService: JournalDataService ) {
  console.log('Journal View'); }

  ngOnInit(): void {
    console.log(showing journal view);
    const myPromiseOfJournal: any = this.journalService.getJournals();
  }

}
