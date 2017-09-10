import { DataFormat, todoData} from "../index";


export class TodoService {
    todoList: DataFormat[] = TodoService.initList();

    static initList(): DataFormat[] {
        let data: DataFormat[];
        if (typeof(localStorage.todoData) !== 'undefined') {
            data = JSON.parse(localStorage.getItem('todoData'));
        } else {
            data = todoData;
        }
        console.log(data);
        return data;
    }

    getTodoList(): DataFormat[] {
        return this.todoList;
    }

    toggleItemCompleted(item: DataFormat) {
        item.completed = !item.completed;
        this.updateLocalStorage();
    }

    addNewItem(title: string) {
        let newItem = new DataFormat(title);
        this.todoList.push(newItem);
        this.updateLocalStorage();
    }

    removeItem(item: DataFormat) {
        let index = this.todoList.indexOf(item);
        if (index > -1) {
            this.todoList.splice(index, 1);
        }
        this.updateLocalStorage();
    }

    updateLocalStorage() {
        localStorage.setItem('todoData', JSON.stringify(this.todoList));
    }
}