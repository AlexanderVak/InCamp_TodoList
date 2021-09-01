import {Task} from '../models/index.js'
class TaskController {
    find(listId, queryParams) {
        if (queryParams) {
            return Task.findAll({
                where: { list_id: listId },
                groupBy: 'id'
            })
        } else {
            return Task.findAll({
                where: {
                    list_id: listId,
                    done: false
                },
                groupBy: 'id'
            })
        }
    }

    create(task, listId) {
        return Task.create({ ...task, list_id: listId })
    }
    findById(id, listId) {
        return Task.findOne({
            where:{ id: id, list_id: listId }
        })
    }
    removeById(id, listId) {
        return Task.destroy({
            where:{ id: id, list_id: listId }
        })
    }
    replace(id, listId, task) {
        return Task.update({
            id: id,
            title: task.title,
            done: task.done,
            due_date: task.dueDate,
            list_id: list_id
        },
        {
            where: { id: id, list_id: listId },
            returning: true
        })
    }
    updateById(id, listId, task) {
        return Task.update({ done: task.done },
            {
                where: { id: id, list_id: listId },
                returning: true
            })
    }
}
export default new TaskController()