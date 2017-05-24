import { IJournal } from './ijournal';
import { IJournalList } from './ijournal-list';


export interface IJournalResponse {
      allJournals: IJournal[];
      count: number;
}
