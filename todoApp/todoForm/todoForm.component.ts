import { Component } from "@angular/core";
import { TodoService } from "../services/todo.service";


@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todoForm.component.html'
})

export class todoFormComponent {
    todoTitle: string = '';

    constructor(private todoService: TodoService) {
    }

    addNew() {
        this.todoService.addNewItem(this.todoTitle);
    }
}