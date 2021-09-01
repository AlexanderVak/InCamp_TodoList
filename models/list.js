import Sequelize from 'sequelize'
import sequelize from '../config/config.js'

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



export default List