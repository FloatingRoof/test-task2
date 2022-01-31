import axios from "axios";

const tenantguid = "32d6e78e-e4cb-4f6d-98e1-182a690d30b0";

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
    createTask(name , description = "") {
        return instance.post(`api/${tenantguid}/Tasks`, {name, description});
    },
    editTask(id, statusId,executorId ) {
        return instance.put(`api/${tenantguid}/Tasks`, {id,  statusId,executorId });
    },
    getTaskById(id) {
        return instance.get(`api/${tenantguid}/Tasks/${id}`);
    }
}