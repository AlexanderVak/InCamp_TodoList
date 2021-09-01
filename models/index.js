import List from "./list.js";
import Task from "./task.js";

List.hasMany(Task)
Task.belongsTo(List, { through: List})

export {List, Task}