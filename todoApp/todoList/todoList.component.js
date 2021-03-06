"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var todo_service_1 = require("../services/todo.service");
var todoListComponent = /** @class */ (function () {
    function todoListComponent(todoService) {
        this.todoService = todoService;
        this.todoList = [];
    }
    todoListComponent.prototype.ngOnInit = function () {
        this.todoList = this.todoService.getTodoList();
    };
    todoListComponent.prototype.toggleCompleted = function (item) {
        this.todoService.toggleItemCompleted(item);
    };
    todoListComponent.prototype.removeItem = function (item) {
        this.todoService.removeItem(item);
    };
    todoListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todo-list',
            templateUrl: 'todoList.component.html'
        }),
        __metadata("design:paramtypes", [todo_service_1.TodoService])
    ], todoListComponent);
    return todoListComponent;
}());
exports.todoListComponent = todoListComponent;
//# sourceMappingURL=todoList.component.js.map