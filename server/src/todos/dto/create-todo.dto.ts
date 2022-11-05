export class CreateTodoDto {
    description: string;
    status: 'new' | 'in progress' | 'closed'
}
