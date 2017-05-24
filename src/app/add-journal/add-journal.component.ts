import { Component, OnInit, Input } from '@angular/core';
import { Journal } from '../model/journal';
import { EnumCategory } from '../model/enum-category';
import { JournalDataService } from '../service/journal-data.service';

@Component({
  selector: 'app-add-journal',
  templateUrl: './add-journal.component.html',
  styleUrls: ['./add-journal.component.css']
})
export class AddJournalComponent implements OnInit {

  categories: Array<string> ;
  categoryValue: EnumCategory;
  EnumCategory: typeof EnumCategory = EnumCategory;

  constructor(private journalDataService: JournalDataService) {
  console.log("AddJournalComponent"); }

  ngOnInit() {
    console.log(this.EnumCategory.Miscellaneous);
    console.log("add journal init");
    const x = EnumCategory;
    const options = Object.keys(x);
    this.categories = options.slice(options.length / 2);
  }
  parseSelectedValue(value: string) {
    console.log(value);
    this.categoryValue = EnumCategory[value];
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
              // this has to be modified for correct submission the old code is below
              // s[s.length] = { name: field.name, value: field.options[j].value };
              // new value needs to be a comma separated list
              newField = newField + `${field.options[j].value},`;
              s[currentFormLength] = { name: field.name, value: newField };
            }
          }
          // strip the last comma
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
