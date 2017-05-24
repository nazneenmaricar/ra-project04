import { Component, OnInit,Input } from '@angular/core';

import { Journal } from '../model/journal';
import { EnumCategory } from '../model/enum-category';
import { JournalDataService } from '../service/journal-data.service';


@Component({
  selector: 'app-submit-entry',
  templateUrl: './submit-entry.component.html',
  styleUrls: ['./submit-entry.component.css']
})

export class SubmitEntryComponent implements OnInit {

  categories: Array<string>;
  categoryValue: EnumCategory;
  EnumCategory: typeof EnumCategory = EnumCategory;
  //journalDataService: JournalDataService;

  constructor(private journalDataService: JournalDataService) {}

  ngOnInit() {
    console.log("Submit-entry");
    //console.log(this.EnumCategory.Miscellaneous);
    const x = EnumCategory;
    console.log(x);
    const options = Object.keys(x);
    //console.log(options);
    this.categories = options.slice(options.length/2);
    console.log(this.categories);
    //debugger;
  }

    parseSelectedValue(value: string) {
      console.log(value);
      this.categoryValue = EnumCategory[value];
    }

    submitForm(e:any) {
      console.log("submitforms");
      const form = (e.target as HTMLButtonElement).parentElement;
      console.log(form);
      //debugger;
      const serializedForm = this.jsSerializeArray(form);
      const jsonData = JSON.stringify(serializedForm);
      console.log("serializedForm");
      console.log(jsonData);
      //debugger;
      const paramData = {'params' : jsonData};
      console.log(paramData);
      const journalPost = this.journalDataService.postJournals(jsonData);
    }
    jsSerializeArray(form) {
  let field: any;
  let numberOfOptions = 0;
    const s: Array<any> = [];
  if (typeof form === 'object' && form.nodeName === 'FORM') {
    const len: number = form.elements.length;
    for (let i = 0; i < len; i++) {
      field = form.elements[i];
      const fieldName = field.name;
      const isFieldDisabled: Boolean = field.disabled;
      const fieldType = field.type;
      const fieldValue = field.value;
      if (fieldName && !isFieldDisabled && fieldType !== 'file' && fieldType !== 'reset' && fieldType !== 'submit' && fieldType !== 'button') {
        if (field.type === 'select-multiple') {
          let newField = '';
          numberOfOptions  = form.elements[i].options.length;
          const currentFormLength = s.length;
          for (let j = 0; j < numberOfOptions; j++) {
            if (field.options[j].selected) {
              newField = newField + `${field.options[j].value},`;
              s[currentFormLength] = { name: field.name, value: newField };
            }
          }
          s[currentFormLength].value = s[currentFormLength].value.toString().slice(0, -1);

        } else if ((fieldType !== 'checkbox' && fieldType !== 'radio') || field.checked) {
          s[s.length] = { name: fieldName, value: fieldValue };
        }
      }
    }
  }
  return s;

};
}
