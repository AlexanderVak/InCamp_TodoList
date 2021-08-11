import Sequelize from 'sequelize'

const sequelize = new Sequelize('todolist', 'todo_app', 'password', {
dialect: 'postgres',
host: 'localhost'
})

export default sequelize;
