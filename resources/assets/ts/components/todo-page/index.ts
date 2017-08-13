import { Component, OnInit } from "@angular/core";
import './style.scss';

@Component({
    selector: "nm-todo-page",
    template: require("./template.html"),
})

export default class HomePageComponent {
    page: string = 'Todo Page'
    public constructor() {}
}
