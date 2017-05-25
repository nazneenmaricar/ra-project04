import { Journal } from './journal';
import { JournalList } from './journal.list';

export class JournalResponse  {

  allJournals: Journal[];
  count: number;

  constructor ( allJournals: Array<any> =[], count:number = 0) {

    this.allJournals = allJournals;
    this.count = count;
  }

}
