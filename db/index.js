import Pool from "pg";
export const pool = new Pool({
    user: 'todo_app',
    host: 'localhost',
    database: 'todolist',
    password: 'password'
})