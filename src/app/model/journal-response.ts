import { Journal } from "./journal";
import { JournalList } from "./journal.list";

export class JournalResponse {
  count: number = 0 ;
  allJournals: Journal[];
}
