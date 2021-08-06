import pool from '../db/index.js'

class Task {

    async taskExists(id) {
        let result = await pool.query('SELECT * FROM tasks WHERE EXISTS(SELECT id FROM tasks WHERE id=$1)', [id])
        console.log(result);
    }

    async find() {
        let tasks = await pool.query('SELECT * FROM tasks ORDER BY id')
        return tasks.rows
    }

    async create(task) {
        await pool.query('INSERT INTO tasks (title, due_date) VALUES ($1, $2)', [task.title, new Date(task.dueDate)])

        let tasks = await pool.query('SELECT * FROM tasks ORDER BY id DESC LIMIT 1')
        console.log(tasks.rows);
        return tasks.rows
    }

    async findById(id) {
        let tasks = await pool.query('SELECT * FROM tasks WHERE id=$1', [id])
        this.taskExists(id)
        return tasks.rows
    }

    async findByIdAndRemove(id) {
        let tasks = await pool.query('DELETE FROM tasks WHERE id=$1', [id])
        return tasks.rows
    }
    async findByIdAndReplace(id, task) {
        await pool.query('UPDATE tasks SET title=$1, done=$2, due_date=$3 WHERE id=$4', [task.title, task.done, task.dueDate, id])
        return this.findById(id)
    }

    async findByIdAndUpdate(id, task) {
        await pool.query('UPDATE tasks SET done=$1 WHERE id=$2', [task.done, id])
        return this.findById(id)
    }
}
export default Task