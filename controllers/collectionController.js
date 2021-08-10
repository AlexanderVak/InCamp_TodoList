import Collection from "../models/collection.js";
let collection = new Collection()
class CollectionController{
    find(){
        return collection.tasksForToday()
    }
}
export default new CollectionController()