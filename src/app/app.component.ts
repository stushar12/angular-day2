import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textValue = "";
  no_task_left = false;

  data = [{
    title: "A default item",
    completed: false
  },
  {
    title: "A completed default item",
    completed: true
  }
  ];

  AddTask() {
    if (this.textValue !== "") {
      this.no_task_left = false;
      this.data.push(
        {
          title: this.textValue,
          completed: false
        });
      this.textValue = "";    //clearing the input box
    }
  }

  clearData() {
    let remove_items: Array<number> = [];
    this.data.forEach((item) => {
      if (item.completed === true) {
        let index = this.data.indexOf(item);
        remove_items.push(index);
      }
    })

    for (var i = remove_items.length - 1; i >= 0; i--) {
      this.data.splice(remove_items[i], 1);
    }

    if (this.data.length == 0)
      this.no_task_left = true;
  }

}