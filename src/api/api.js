import axios from "axios";

const tenantguid = "8c69c5d0-5600-4d67-8c20-4c851416e3ff";

const instance = axios.create({
    //куки
    baseURL: 'http://intravision-task.test01.intravision.ru/',
});


export const applicationsAPI = {
    getApplications() {
        return instance.get(`odata/tasks?tenantguid=${tenantguid}`);
    },

    getPriorities() {
        return instance.get(`api/${tenantguid}/Priorities`);
    },
    createTask(name , description = "", statusId = 120066) {
        return instance.post(`api/${tenantguid}/Tasks`, {name, description, statusId});
    },
    getTaskById(id) {
        return instance.get(`/api/${tenantguid}/Tasks/${id}`);
    }
}