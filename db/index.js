import Pool from "pg-pool";
const pool = new Pool({
    user: 'todo_app',
    host: 'localhost',
    database: 'todolist',
    password: 'password'
})
export default pool