import axios from "axios";

const tenantguid = "502cdfb9-651d-4634-b84f-17ebba1c42e2";

const instance = axios.create({
    baseURL: 'http://intravision-task.test01.intravision.ru/',
});


export const applicationsAPI = {
    getApplications() {
        return instance.get(`odata/tasks?tenantguid=${tenantguid}`);
    },

    getPriorities() {
        return instance.get(`api/${tenantguid}/Priorities`);
    },
    getStatuses() {
        return instance.get(`api/${tenantguid}/Statuses`);
    },
    getUsers() {
        return instance.get(`api/${tenantguid}/Users`);
    },
    createTask(name , description = "", statusId = 120066) {
        return instance.post(`api/${tenantguid}/Tasks`, {name, description, statusId});
    },
    editTask(id, statusId,executorId ) {
        return instance.put(`api/${tenantguid}/Tasks`, {id,  statusId,executorId });
    },
    getTaskById(id) {
        return instance.get(`api/${tenantguid}/Tasks/${id}`);
    }
}