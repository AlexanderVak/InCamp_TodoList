import Task from '../models/task.js'
let tasks = new Task()
class TaskController {
    find(listId, queryParams) {
        return tasks.find(listId, queryParams)
    }
    create(task) {
        return tasks.create(task)
    }
    findById(id, listId) {
        return tasks.findById(id, listId)
    }
    removeById(id, listId) {
        return tasks.findByIdAndRemove(id, listId)
    }
    replace(id, listId, task) {
        return tasks.findByIdAndReplace(id, listId, task)
    }
    updateById(id, listId, task) {
        return tasks.findByIdAndUpdate(id, listId, task)
    }
}
export default new TaskController()