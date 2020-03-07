import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  user: User;

  constructor() {}

  ngOnInit(): void {
    this.user = { id: 9, name: "Randy" };
  }
}
