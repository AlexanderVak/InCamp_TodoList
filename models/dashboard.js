import pool from "../db/index.js"
export default class Dashboard {
    dashboardQuery = `SELECT COUNT(tasks.id) as planned_tasks
    FROM tasks
    WHERE due_date between $1 and tasks.due_date
    AND done=false`;

    dashboardUnfinishedQuery = `SELECT COUNT(tasks.id) as unfinished_tasks, lists.id as list_id, lists.title as list_title
    FROM lists
    LEFT JOIN tasks ON lists.id = tasks.list_id
    WHERE tasks.due_date between $1 and tasks.due_date AND tasks.done=false 
    GROUP BY lists.id
    ORDER BY lists.id`

    async dashboardUnfinished() {
        let plannedTasks = await pool.query(this.dashboardUnfinishedQuery, [new Date()])
        return plannedTasks.rows
    }
}
