import Sequelize from 'sequelize'
import sequelize from '../config/config.js'

const Task = sequelize.define('task', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
    },
    done: {
        type: Sequelize.BOOLEAN,
        default: false
    },
    due_date: {
        type: Sequelize.DATE
    }
}, { underscore: true, tableName: 'tasks' })

export default Task