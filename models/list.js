import Task from "./task.js"

const increment = (init = 0) => () => ++init
const genId = increment()

class List {
    lists = [
        {
            id: genId(),
            title: 'First List',
            tasks: Task
        },
        {
            id: genId(),
            title: 'Second List',
            tasks: Task
        }
    ]

    find() {
        return this.lists
    }

    create(list) {
        this.lists.push(
            {
                id: genId(),
                title: list.title,
                tasks: Task
            }
        )
        return this.lists[this.lists.length - 1]
    }

    findById(id) {
        return this.lists.find(l => l.id === id)
    }
    findByIdAndRemove(id) {
        let index = this.lists.indexOf(this.findById(id))
        this.lists.splice(index, 1)
        return this.lists
    }
    findByIdAndReplace(id, list) {
        let index = this.lists.indexOf(this.findById(id))
        this.lists[index] = {
            id: id,
            ...list
        }
        return this.findById(id)
    }
    findByIdAndUpdate(id, list) {
        this.findById(id).title = list.title
        return this.findById(id)
    }
}
export default new List()