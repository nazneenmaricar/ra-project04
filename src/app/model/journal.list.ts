import { Journal } from './journal';

export class JournalList{

  journals: Journal[];
  count: number; //added

  constructor(journals: Journal[]= [],count: number = 0){


    this.journals = journals;
    this.count = count; //added
  }
}
