import List from "./list.js";
import Task from "./task.js";

List.hasMany(Task)
Task.belongsToMany(List, { through: List, foreignKey: "list_id"})

export {List, Task}