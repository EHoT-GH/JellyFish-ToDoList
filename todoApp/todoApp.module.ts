import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';

import { todoListComponent, todoFormComponent, todoItemComponent, TodoService } from "./index";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [todoListComponent, todoFormComponent, todoItemComponent],
    providers: [TodoService],
    bootstrap: [todoListComponent]
})
export class todoAppModule {}