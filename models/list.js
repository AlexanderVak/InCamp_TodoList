import pool from "../db/index.js"

class List {
    async listExists(list) {
        if (list.rows.length > 0) {
            return list.rows
        } else {
            return false
        }
    }
    async create(list) {
        await pool.query('INSERT INTO lists (title) VALUES ($1)', [list.title])

        let lists = await pool.query('SELECT * FROM lists ORDER BY id DESC LIMIT 1')
        return lists.rows
    }

    async findById(id) {
        let list = await pool.query('SELECT * FROM lists WHERE id=$1', [id])
        return await this.listExists(list)
    }

    async findByIdAndRemove(id) {
        let list = await pool.query('DELETE FROM lists WHERE id=$1', [id])
        return await this.listExists(list)
    }

    async findByIdAndReplace(id, task) {
        await pool.query('UPDATE lists SET title=$1, tasks=$2 WHERE id=$4', [task.title, task.tasks, id])
        return this.findById(id)
    }

    async findByIdAndUpdate(id, task) {
        await pool.query('UPDATE tasks SET title=$1 WHERE id=$2', [task.done, id])
        return this.findById(id)
    }
}
export default List