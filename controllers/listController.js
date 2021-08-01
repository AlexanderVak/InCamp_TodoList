import List from '../models/list.js'

class ListController {
    find(){
        return List.find()
    }
    create(list){
        return List.create(list)
    }
    findById(id){
        return List.findById(id)
    }    
    removeById(id){
        return List.findByIdAndRemove(id)
    }
    rewrite(id, list){
        return List.findByIdAndRewrite(id, list)
    }
    updateById(id, list){
        return List.findByIdAndUpdate(id, list)
    }
}
export default new ListController()