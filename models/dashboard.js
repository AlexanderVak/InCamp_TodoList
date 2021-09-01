import db from "../db/index.js"
export default class Dashboard {
    dashboardUnfinishedQuery = `SELECT COUNT(tasks.done) as unfinished_tasks, lists.id as list_id, lists.title as list_title
    FROM lists
    LEFT JOIN tasks ON lists.id = tasks.list_id
    WHERE done IS NULL OR tasks.done=false 
    GROUP BY lists.id
    ORDER BY lists.id;`

    async dashboardUnfinished() {
        let plannedTasks = await db('lists')
            .leftJoin('tasks', 'lists.id', 'tasks.list_id')
            .select('lists.id as list_id', 'lists.title as list-title')
            .count('* as unfinished_tasks')
            .whereBetween ('tasks.due_date', [new Date(), db.column('tasks.due_date')])
            .andWhere('tasks.done', false)
            .groupBy ('lists.id')
            .orderBy('lists.id')
        return plannedTasks
    }
}
