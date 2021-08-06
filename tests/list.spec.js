import Task from '../models/task.js'
import List from '../models/list.js'
describe('List class', () => {
    let lists = new List()
    let tasks = new Task()

    const allLists = [
        {
            id: 1,
            title: 'New List',
            tasks: tasks
        },
        {
            id: 2,
            title: 'Another New List',
            tasks: tasks
        }
    ]

    const newList = { id: 1, title: 'New List', tasks: tasks }
    const anotherNewList = { id: 2, title: 'Another New List', tasks: tasks }
    const updatedList = { id: 2, title: 'Updated List Title', tasks: tasks }
    it('should create new list', () => {
        expect(lists.create({ title: 'New List' })).toStrictEqual(newList)
    });
    it('should create another new list', () => {
        expect(lists.create({ title: 'Another New List' })).toStrictEqual(anotherNewList)
    });
    it('should return all lists', () => {
        expect(lists.find()).toStrictEqual(allLists)
    });
    it('should return specific list', () => {
        expect(lists.findById(2)).toStrictEqual(anotherNewList)
    });
    it('should update specific list', () => {
        expect(lists.findByIdAndUpdate(2, { title: 'Updated List Title' })).toStrictEqual(updatedList)
    });
    it('should rewrite specific list', () => {
        expect(lists.findByIdAndReplace(2, {
            title: "Replaced title",
            tasks: tasks
        })).toStrictEqual({
            id: 2,
            title: "Replaced title",
            tasks: tasks
        })
    });
    it('should remove specific list', () => {
        expect(lists.findByIdAndRemove(2)).toStrictEqual([allLists[0]])
    });
});