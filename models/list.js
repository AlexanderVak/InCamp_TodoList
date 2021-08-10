import db from "../db/index.js"

class List {
    async listExists(list) {
        if (list.length > 0) {
            return list
        } else {
            return false
        }
    }

    async find() {
        //pool.query('SELECT * FROM lists ORDER BY id')
        let lists = await db.select().table('lists').orderBy('id')
        return lists
    }

    async create(list) {
        //pool.query('INSERT INTO lists (title) VALUES ($1)', [list.title])
        let lists = await db('lists')
            .returning(['id', 'title'])
            .insert({ title: list.title })
        return lists
    }

    async findById(id) {
        //pool.query('SELECT * FROM lists WHERE id=$1', [id])
        let list = await db('lists').where('id', id)
        return await this.listExists(list)
    }

    async findByIdAndRemove(id) {
        //pool.query('DELETE FROM lists WHERE id=$1', [id])
        let list = await db('lists')
            .where('id', id)
            .del()

        return await this.listExists(list)
    }

    async findByIdAndReplace(id, list) {
        //pool.query('UPDATE lists SET title=$1, tasks=$2 WHERE id=$4', [task.title, task.tasks, id])
        let lists = await db('lists')
            .returning(['id', 'title'])
            .where('id', id)
            .update({
                title: list.title
            })
        return lists
    }

    async findByIdAndUpdate(id, list) {
        //pool.query('UPDATE tasks SET title=$1 WHERE id=$2', [task.done, id])
        let lists = await db('lists')
            .returning(['id', 'title'])
            .where('id', id)
            .update({
                title: list.title
            })
        return lists
    }
}
export default List