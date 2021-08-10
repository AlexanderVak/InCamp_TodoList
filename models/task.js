import db from '../db/index.js'

class Task {

    async taskExists(task) {
        if (task.length > 0) {
            return task
        } else {
            return false
        }
    }

    async find(listId, queryParams) {
        let tasks
        if (queryParams) {
            // SELECT * FROM tasks
            // WHERE list_id=$1
            // ORDER BY id
            tasks = await db('tasks').where('list_id', listId).orderBy('id')

        } else {
            // SELECT * FROM tasks
            // WHERE list_id=$1 AND done=false
            // ORDER BY id
            tasks = await db('tasks').where('list_id', listId).andWhere('done', '=', false).orderBy('id')
        }
        return await this.taskExists(tasks)
    }

    async create(task, listId) {
        //INSERT INTO tasks
        //(title, due_date, list_id)
        //VALUES ($1, $2, 3)
        //RETURNING ROW
        let tasks = await db('tasks')
            .returning(['id', 'list_id', 'title', 'done', 'due_date'])
            .insert({
                title: task.title,
                due_date: task.dueDate,
                list_id: listId
            })
        return tasks
    }

    async findById(id, listId) {
        // SELECT *
        // FROM tasks
        // WHERE id=$1 AND list_id=$2
        let task = await db('tasks')
            .returning(['id', 'list_id', 'title', 'done', 'due_date'])
            .where('id', id)
            .andWhere('list_id', listId)

        return await this.taskExists(task)
    }

    async findByIdAndRemove(id, listId) {
        // DELETE FROM tasks
        // WHERE id=$1 and list_id=$2
        let task = await db('tasks')
            .where('id', id)
            .andWhere('list_id', listId)
            .del()

        return await this.taskExists(task)
    }

    async findByIdAndReplace(id, listId, task) {
        // UPDATE tasks 
        // SET title=$1, done=$2, due_date=$3
        // WHERE id=$4 and list_id=$5
        let tasks = await db('tasks')
            .returning(['id', 'list_id', 'title', 'done', 'due_date'])
            .where('id', id)
            .andWhere('list_id', listId)
            .update({
                title: task.title,
                done: task.done,
                due_date: new Date (task.dueDate)
            })
        return await this.taskExists(tasks)
    }

    async findByIdAndUpdate(id, listId, task) {
        // UPDATE tasks
        // SET done=$1
        // WHERE id=$2 and list_id=$3
        let tasks = await db('tasks')
            .returning(['id', 'list_id', 'title', 'done', 'due_date'])
            .where('id', id)
            .andWhere('list_id', listId)
            .update({
                done: task.done,
            })
        return await this.taskExists(tasks)
    }
}
export default Task