import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "lidp-test";
  isChecked = true;

  constructor() {
    this.title = "new person";
  }

  onChange($event) {
    console.log("changes", $event);
  }
}
