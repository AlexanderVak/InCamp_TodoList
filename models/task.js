import pool from '../db/index.js'

class Task {

    async taskExists(task) {
        if (task.rows.length > 0) {
            return task.rows
        } else {
            return false
        }
    }

    selectAll = `SELECT * 
                 FROM tasks
                 WHERE list_id=$1
                 ORDER BY id`
    selectAllNotDone = `SELECT * 
                 FROM tasks
                 WHERE list_id=$1 AND done=false
                 ORDER BY id`
    
    insert = `INSERT INTO tasks
              (title, due_date, list_id)
              VALUES ($1, $2, 3)
              RETURNING ROW`

    selectOne = `SELECT *
                 FROM tasks
                 WHERE id=$1 AND list_id=$2`

    delete = `DELETE FROM tasks
              WHERE id=$1 and list_id=$2`

    update = `UPDATE tasks 
              SET title=$1, done=$2, due_date=$3
              WHERE id=$4 and list_id=$5`

    updateDone = `UPDATE tasks
                  SET done=$1
                  WHERE id=$2 and list_id=$3`

    async find(listId, queryParams) {
        console.log(queryParams);
        let tasks
        if (queryParams) {
            tasks = await pool.query(this.selectAll, [listId])  
        } else {
            tasks = await pool.query(this.selectAllNotDone, [listId])
        }        
        return tasks.rows
    }

    async create(task) {
        let tasks = await pool.query(this.insert, [task.title, new Date(task.dueDate), task.listId])
        return tasks.rows
    }

    async findById(id, listId) {
        let task = await pool.query(this.selectOne, [id, listId])
        return await this.taskExists(task)
    }

    async findByIdAndRemove(id, listId) {
        let task = await pool.query(this.delete, [id, listId])
        return await this.taskExists(task)
    }

    async findByIdAndReplace(id, listId, task) {
        await pool.query(this.update, [task.title, task.done, task.dueDate, id, listId])
        return this.findById(id)
    }

    async findByIdAndUpdate(id, listId, task) {
        await pool.query(this.updateDone, [task.done, id, listId])
        return this.findById(id)
    }
}
export default Task