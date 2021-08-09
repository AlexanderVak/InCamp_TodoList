import pool from '../db/index.js'

class Task {

    async taskExists(task) {
        if (task.rows.length > 0) {
            return task.rows
        } else {
            return false
        }
    }

    async find(listId) {
        let tasks = await pool.query('SELECT * FROM tasks WHERE list_id=$1 ORDER BY id', [listId])
        return tasks.rows
    }

    async create(task) {
        await pool.query('INSERT INTO tasks (title, due_date, list_id) VALUES ($1, $2, 3)', [task.title, new Date(task.dueDate), task.listId])

        let tasks = await pool.query('SELECT * FROM tasks ORDER BY id DESC LIMIT 1')
        return tasks.rows
    }

    async findById(id) {
        let task = await pool.query('SELECT * FROM tasks WHERE id=$1', [id])
        return await this.taskExists(task)

    }

    async findByIdAndRemove(id) {
        let task = await pool.query('DELETE FROM tasks WHERE id=$1', [id])
        return await this.taskExists(task)
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