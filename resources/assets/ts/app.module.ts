import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import HomePage from "./components/home-page/index";
import TodoPage from "./components/todo-page/index";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot(),
    ],
    declarations: [
      HomePage,
      TodoPage,
    ],
    bootstrap: [
      TodoPage,
    ]
})

export default class AppModule {}
