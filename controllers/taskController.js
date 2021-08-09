import Task from '../models/task.js'
let tasks = new Task()
class TaskController {
    find(listId){
        return tasks.find(listId)
    }
    create(task){
        return tasks.create(task)
    }
    findById(id){
        return tasks.findById(id)
    }    
    removeById(id){
        return tasks.findByIdAndRemove(id)
    }
    replace(id, task){
        return tasks.findByIdAndReplace(id, task)
    }
    updateById(id, task){
        return tasks.findByIdAndUpdate(id, task)
    }
}
export default new TaskController()