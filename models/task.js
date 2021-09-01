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
    dueDate: {
        type: Sequelize.DATE
    }
}, {
    underscored: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    tableName: 'tasks',
})



export default Task