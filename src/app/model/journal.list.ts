import { Journal } from './journal';

export class JournalList {

  journals: Journal[];
  constructor(journals: Journal[]= []) {

    this.journals = journals;
  }
}
