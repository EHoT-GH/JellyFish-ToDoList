import { Component, OnInit } from "@angular/core";
import { DataFormat } from "../index";
import { TodoService } from "../services/todo.service";

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todoList.component.html'
})

export class todoListComponent implements OnInit {
    todoList: DataFormat[];

    constructor(private todoService: TodoService) {
        this.todoList = [];
    }

    ngOnInit() {
        this.todoList = this.todoService.getTodoList();
    }

    toggleCompleted(item: DataFormat) {
        this.todoService.toggleItemCompleted(item);
    }

    removeItem(item: DataFormat) {
        this.todoService.removeItem(item);
    }
}