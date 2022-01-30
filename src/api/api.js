import axios from "axios";
//6f0ef1b6-824e-4335-a4b4-a1ab3539a9a2
const tenantguid = "79c3a821-6ff8-4f78-bb9d-e6ffcef7bb79";

const instance = axios.create({
    //куки
    baseURL: 'http://intravision-task.test01.intravision.ru/',
});


export const applicationsAPI = {
    getApplications() {
        return instance.get(`odata/tasks?tenantguid=${tenantguid}`)
    },

    getPriorities() {
        return instance.get(`api/${tenantguid}/Priorities`)
    },
}