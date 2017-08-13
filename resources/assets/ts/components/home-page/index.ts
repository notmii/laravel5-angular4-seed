import { Component, OnInit } from "@angular/core";
// import template from "./template.html"

@Component({
    selector: "nm-home-page",
    template: require("./template.html"),
})

export default class HomePageComponent implements OnInit {
    page: string = 'Home Page'
    public constructor() {}
    public ngOnInit(): void {}
}
