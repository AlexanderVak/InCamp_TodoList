import Task from '../models/task.js'
describe('Task class', () => {
    let tasks = new Task()
    const newTask = {
        id: 1,
        title: 'New task',
        done: false,
        dueDate: Date('2021-08-13')
    }
    const anotherNewTask = {
        id: 2,
        title: 'Another new task',
        done: false,
        dueDate: Date('2021-08-22')
    }
    const allTasks = [
        {
            id: 1,
            title: 'New task',
            done: false,
            dueDate: Date('2021-08-13')
        },
        {
            id: 2,
            title: 'Another new task',
            done: false,
            dueDate: Date('2021-08-22')
        }
    ]
    const updatedTask = {
        id: 2,
        title: 'Another new task',
        done: true,
        dueDate: Date('2021-08-22')
    }

    it('should create new task', () => {
        expect(tasks.create({ title: 'New task', dueDate: '2021-08-13' })).toStrictEqual(newTask)
    });

    it('should create another new task', () => {
        expect(tasks.create({ title: 'Another new task', dueDate: '2021-08-22' })).toStrictEqual(anotherNewTask)
    });
    it('should return all tasks', () => {
        expect(tasks.find()).toStrictEqual(allTasks)
    });
    it('should return specific task', () => {
        expect(tasks.findById(2)).toStrictEqual(anotherNewTask)
    });

    it('should update specific task', () => {
        expect(tasks.findByIdAndUpdate(2, { done: true })).toStrictEqual(updatedTask)
    });
    it('should replace specific task', () => {
        expect(tasks.findByIdAndReplace(2, {
            title: "Replaced title",
            done: true,
        })).toStrictEqual({
            id: 2,
            title: "Replaced title",
            done: true
        })
    });
    it('should remove specific task', () => {
        expect(tasks.findByIdAndRemove(2)).toStrictEqual([newTask])
    });
});