import Sequelize from 'sequelize'
import sequelize from '../config/config.js'
import Task from './task.js'

const List = sequelize.define('list', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
    }
}, {
    underscored: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    tableName: 'lists'
})

List.hasMany(Task)

export default List