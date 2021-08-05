const increment = (init = 0) => () => ++init
const genId = increment()

class Task {
    tasks = []

    find() {
        return this.tasks
    }

    create(task){
        this.tasks.push({
            id: genId(),
            title: task.title,
            done: false,
            dueDate: new Date(task.dueDate)
        })
        return this.tasks[this.tasks.length - 1]
    }

    findById(id) {
        return this.tasks.find(t => t.id === id)
    }
    findByIdAndRemove(id) {
        let index = this.tasks.indexOf(this.findById(id))
        this.tasks.splice(index, 1)
        return this.tasks
    }
    findByIdAndReplace(id, task) {
        let index = this.tasks.indexOf(this.findById(id))
        this.tasks[index] = {
            id: id,
            ...task
        }
        return this.findById(id)
    }
    findByIdAndUpdate(id, task) {
        this.findById(id).done = task.done
        return this.findById(id)
    }
}
export default Task