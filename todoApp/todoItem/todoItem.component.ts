import { Component, Input, Output, EventEmitter } from "@angular/core";
import { DataFormat } from "../index";

@Component({
    moduleId: module.id,
    selector: 'todo-item',
    templateUrl: 'todoItem.component.html'
})

export class todoItemComponent {
    @Input() todoItem: DataFormat;
    @Output() toggle = new EventEmitter();
    @Output() remove = new EventEmitter();

    toggleCompleted() {
        this.toggle.emit(this.todoItem);
    }

    removeItem() {
        this.remove.emit(this.todoItem);
    }
}