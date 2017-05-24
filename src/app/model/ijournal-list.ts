import { IJournal } from './ijournal';

export interface IJournalList {
  journals: IJournal[];
  count: number; //added
}
