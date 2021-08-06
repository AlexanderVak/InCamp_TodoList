import pool from '../db/index.js'

class Task {

    async find() {
        let tasksQuery = await pool.query('SELECT * FROM tasks ORDER BY id')
        return tasksQuery.rows
    }

    async create(task) {
        pool.query('INSERT INTO tasks (title, due_date) VALUES ($1, $2)', [task.title, new Date(task.dueDate)])
        
        let tasksQuery = await pool.query('SELECT * FROM tasks ORDER BY id DESC LIMIT 1')
        console.log(tasksQuery.rows);
        return tasksQuery.rows
    }

    async findById(id) {
        let tasksQuery = await pool.query('SELECT * FROM tasks WHERE id=$1', [id])
        return tasksQuery.rows
    }

    async findByIdAndRemove(id) {
        let tasksQuery = await pool.query('DELETE FROM tasks WHERE id=$1', [id])
        return tasksQuery.rows
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