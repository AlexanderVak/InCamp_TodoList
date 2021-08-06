import List from '../models/list.js'
let lists = new List()
class ListController {
    find(){
        return lists.find()
    }
    create(list){
        return lists.create(list)
    }
    findById(id){
        return lists.findById(id)
    }    
    removeById(id){
        return lists.findByIdAndRemove(id)
    }
    replace(id, list){
        return lists.findByIdAndReplace(id, list)
    }
    updateById(id, list){
        return lists.findByIdAndUpdate(id, list)
    }
}
export default new ListController()