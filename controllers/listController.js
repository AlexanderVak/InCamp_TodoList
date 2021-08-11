import List from '../models/list.js'
class ListController {
    find() {
        return List.findAll({ group: 'id' })
    }
    create(list) {
        return List.create(list)
    }
    findById(id) {
        return List.findByPk(id)
    }
    removeById(id) {
        return List.destroy({
            where: {
                id: id
            }
        })
    }
    replace(id, list) {
        return List.update(list, {
            where: {
                id: id
            }
        })
    }
    updateById(id, list) {
        return List.update(list, {
            where: {
                id: id
            }
        })
    }
}
export default new ListController()