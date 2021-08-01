import Task from '../models/task.js'
describe('Test Task class', () => {
    const tasks = [
        { id: 1, title: 'First task', done: false },
        { id: 2, title: 'Second task', done: false }
    ]
    const newTask = { id: 3, title: 'New task', done: false }
    const updatedTask = { id: 2, title: 'Second task', done: true }
    it('should return all tasks', () => {
        expect(Task.find()).toStrictEqual(tasks)        
    });
    it('should return specific task', () => {
        expect(Task.findById(2)).toStrictEqual(tasks[1])        
    });
    it('should create new task', () => {
        expect(Task.create({title: 'New task'})).toStrictEqual(newTask)        
    });
    it('should remove specific task', () => {
        expect(Task.findByIdAndRemove(3)).toStrictEqual(tasks)        
    });
    it('should update specific task', () => {
        expect(Task.findByIdAndUpdate(2, {done: true})).toStrictEqual(updatedTask)        
    });

});