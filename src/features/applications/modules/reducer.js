import {applicationsAPI} from "../../../api/api";

const SET_TASKS = '/application/SET_TASKS';
const SET_PRIORITIES = '/application/SET_PRIORITIES';
const DELETE_TASKS = '/application/DELETE_TASKS';
const SET_ONE_TASK = '/application/SET_ONE_TASK';
const SET_STATUSES = '/application/SET_STATUSES';
const SET_USERS = '/application/SET_USERS';
const EDIT_TASK = '/application/EDIT_TASK';


let initialState = {
    tasks: [],
    priorities: [],
    statuses: [],
    users: []
}


export const applicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS: {
            return {
                ...state,
                tasks: [...action.tasks]
            };

        }
        case SET_PRIORITIES: {
            return {
                ...state,
                priorities: [...action.priorities]
            }
        }
        case DELETE_TASKS: {
            return {
                ...state,
                tasks: []
            }

        }
        case SET_ONE_TASK: {
            return {
                ...state,
                tasks: [...state.tasks, action.task]
            }
        }
        case SET_STATUSES: {
            return {
                ...state,
                statuses: [...action.statuses]
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case EDIT_TASK: {
            return {
                ...state,
                //users: [...action.users]

                tasks: state.tasks.map(t => {
                    if (t.id === action.task.id)
                        return action.task
                    return t
                })
            }
        }
        default:
            return state;
    }
}


export const getApplicationData = () => async (dispatch) => {
    let responsePriorities = await applicationsAPI.getPriorities();
    if (responsePriorities.status == 200) {
        dispatch(setPriorities(responsePriorities.data));
        let responseStatuses = await applicationsAPI.getStatuses();
        if (responseStatuses.status == 200) {
            dispatch(setStatuses(responseStatuses.data));
            let responseUser = await applicationsAPI.getUsers();
            if (responseUser.status == 200) {
                dispatch(setUsers(responseUser.data));
                let response = await applicationsAPI.getApplications();
                if (response.status == 200) {
                    dispatch(setTasks(response.data.value))
                }
            }
        }
    }
}


export const createNewTask = (name, description) => async (dispatch) => {
    let response = await applicationsAPI.createTask(name, description);
    if (response.status == 200) {
        let responseNewTaskData = await applicationsAPI.getTaskById(response.data)
        dispatch(setOneTask(responseNewTaskData.data));
        return response.data;
    }
}

export const editTask = (id, statusId, executorId) => async (dispatch) => {
    let response = await applicationsAPI.editTask(id, statusId, executorId);
    if (response.status == 200) {
        let responseNewTaskData = await applicationsAPI.getTaskById(id)
        dispatch(editTaskData(responseNewTaskData.data));
    }
}


export const setTasks = (tasks) => ({type: SET_TASKS, tasks});
export const editTaskData = (task) => ({type: EDIT_TASK, task});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setStatuses = (statuses) => ({type: SET_STATUSES, statuses});
export const setOneTask = (task) => ({type: SET_ONE_TASK, task});
export const setPriorities = (priorities) => ({type: SET_PRIORITIES, priorities})
export const deleteTasks = () => ({type: DELETE_TASKS})
