import axios from "axios";
const tenantguid = "e8883450-dfcc-448f-9098-050a11045b5f";

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