import db from "../db/index.js"
export default class Collection {
    todayQuery = `SELECT tasks.id, tasks.title as task_title, lists.title as list_title
                  FROM tasks
                  RIGHT JOIN lists ON tasks.list_id = lists.id
                  WHERE tasks.due_date=CURRENT_DATE`
    async tasksForToday(){
        let tasks = await db('tasks')
            .rightJoin('lists', 'tasks.list_id', 'lists.id')
            .select('tasks.id', 'tasks.title as task_title', 'lists.title as list_title')
            .where('tasks.due_date', new Date())
        return tasks
    }
    
}