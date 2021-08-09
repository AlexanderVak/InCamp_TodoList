import Dashboard from "../models/dashboard.js";
let dashboard = new Dashboard()
class DashboardController{
    find(){
        return dashboard.dashboardUnfinished()
    }
}
export default new DashboardController()