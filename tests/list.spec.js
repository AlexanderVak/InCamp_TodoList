import Task from '../models/task.js'
import List from '../models/list.js'
describe('List class', () => {
    const tasks = [
        { id: 1, title: 'First task', done: false },
        { id: 2, title: 'Second task', done: false }
    ]

    const lists = [
        {
            id: 1,
            title: 'First List',
            tasks: Task.find()
        },
        {
            id: 2,
            title: 'Second List',
            tasks: Task.find()
        }
    ]

    const newList = { id: 3, title: 'New List', tasks: Task.find() }
    const updatedList = { id: 2, title: 'Updated title', tasks: Task.find() }
    it('should return all tasks', () => {
        expect(List.find()).toStrictEqual(lists)
    });
    it('should return specific task', () => {
        expect(List.findById(2)).toStrictEqual(lists[1])
    });
    it('should create new task', () => {
        expect(List.create({ title: 'New List' })).toStrictEqual(newList)
    });
    it('should remove specific task', () => {
        expect(List.findByIdAndRemove(3)).toStrictEqual(lists)
    });
    it('should update specific task', () => {
        expect(List.findByIdAndUpdate(2, { title: 'Updated title' })).toStrictEqual(updatedList)
    });
    it('should rewrite specific task', () => {
        expect(List.findByIdAndRewrite(2, {
            title: "Rewriten title",
            rewrite: true
        })).toStrictEqual({
            id: 2,
            title: "Rewriten title",
            rewrite: true,
        })
    });

});