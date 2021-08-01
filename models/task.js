const increment = (init = 0) => () => ++init
const genId = increment()

class Task {
    tasks = [
        { id: genId(), title: 'First task', done: false },
        { id: genId(), title: 'Second task', done: false }
    ]

    find() {
        return this.tasks
    }

    create(task) {
        this.tasks.push(
            {
                id: genId(),
                title: task.title,
                done: false
            }
        )
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
    findByIdAndUpdate(id, task) {
        this.findById(id).done = task.done
        return this.findById(id)
    }
}
export default new Task()