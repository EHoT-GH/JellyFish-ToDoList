"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var TodoService = /** @class */ (function () {
    function TodoService() {
        this.todoList = TodoService.initList();
    }
    TodoService.initList = function () {
        var data;
        if (typeof (localStorage.todoData) !== 'undefined') {
            data = JSON.parse(localStorage.getItem('todoData'));
        }
        else {
            data = index_1.todoData;
        }
        console.log(data);
        return data;
    };
    TodoService.prototype.getTodoList = function () {
        return this.todoList;
    };
    TodoService.prototype.toggleItemCompleted = function (item) {
        item.completed = !item.completed;
        this.updateLocalStorage();
    };
    TodoService.prototype.addNewItem = function (title) {
        var newItem = new index_1.DataFormat(title);
        this.todoList.push(newItem);
        this.updateLocalStorage();
    };
    TodoService.prototype.removeItem = function (item) {
        var index = this.todoList.indexOf(item);
        if (index > -1) {
            this.todoList.splice(index, 1);
        }
        this.updateLocalStorage();
    };
    TodoService.prototype.updateLocalStorage = function () {
        localStorage.setItem('todoData', JSON.stringify(this.todoList));
    };
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map