import { IJournalList } from './ijournal-list';
import { Journal } from './journal';

export class JournalList implements IJournalList{

  journals: Journal[];
  count: number; //added

  constructor(journals: Journal[]= [], count:number = 0) {

    this.journals = journals;
    this.count = count; //added
  }
}
