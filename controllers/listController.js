import {List} from '../models/index.js'
class ListController {
    find() {
        return List.findAll({ groupBy: 'id' })
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
        return List.update({
            id: id,
            title: list.title
        }, {
            where: { id: id },
            returning: true,
            plain: true
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