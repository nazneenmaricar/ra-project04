import { IJournal } from './ijournal';

export class Journal implements IJournal {
  id: number= 0;
  title: string= "";
  content: string = "";
  category: string= "";
  image: string= "";
  date: string= "";
  author: string= "";

  constructor (id: number=0, title: string="", content: string="", category: string="", image: string="", date: string="", author: string="") {

    this.id= id;
    this.title= title;
    this.content= content;
    this.category= category;
    this.image= image;
    this.date= date;
    this.author= author;
  }

}
