import {Injectable} from '@nestjs/common';
import {CreateTodoDto} from './dto/create-todo.dto';
import {UpdateTodoDto} from './dto/update-todo.dto';
import {Todo} from "./entities/todo.entity";
import {todos} from "./todos.mock";
import {v4 as uuid} from 'uuid';


let todoData = todos;

@Injectable()

export class TodosService {
    create(createTodoDto: CreateTodoDto) {
        const item:Todo = {...createTodoDto, id: uuid()}
        todoData.push(item)
        return item;
    }

    findAll(): Todo[] {
        return todoData;
    }

    findOne(id: string): Todo {
        return todoData.find(item => item.id == id);
    }

    update(id: string, updateTodoDto: UpdateTodoDto) {
        const index = todoData.findIndex(item => item.id == id)
        todoData[index] = {...todoData[index], ...updateTodoDto}

    }

    remove(id: string) {
        todoData = todoData.filter(item => item.id != id);
    }
}
