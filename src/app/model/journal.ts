export class Journal {
  ID: number= 0;
  title:string= "";
  content:string = "";
  category:string= "";
  image:string="";
  date:string="";
  author:string="";

  constructor (ID:number=0, title:string="", content:string="", category:string="", image:string="", date:string="", author:string="") {

    this.ID=ID;
    this.title=title;
    this.content=content;
    this.category=category;
    this.image=image;
    this.date=date;
    this.author=author;
  }

}
