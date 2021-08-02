import Task from '../models/task.js'

class TaskController {
    find(){
        return Task.find()
    }
    create(task){
        return Task.create(task)
    }
    findById(id){
        return Task.findById(id)
    }    
    removeById(id){
        return Task.findByIdAndRemove(id)
    }
    replace(id, task){
        return Task.findByIdAndRewrite(id, task)
    }
    updateById(id, task){
        return Task.findByIdAndUpdate(id, task)
    }
}
export default new TaskController()