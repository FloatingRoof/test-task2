import {applicationsAPI} from "../../../api/api";

const SET_TASKS = '/application/SET_TASKS';
const SET_PRIORITIES = '/application/SET_PRIORITIES';
const DELETE_TASKS = '/application/DELETE_TASKS';
const SET_ONE_TASK = '/application/SET_ONE_TASK';


let initialState = {
    tasks: [],
    priorities: []
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
            debugger
            return {
                ...state,
                tasks: [...state.tasks, action.task]
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
        let response = await applicationsAPI.getApplications();

        if (response.status == 200) {
            dispatch(setTasks(response.data.value))
        }
    }
}


export const createNewTask = (name, description, setStatus) => async (dispatch) => {
    let response = await applicationsAPI.createTask(name, description);
    if (response.status == 200) {
        let responseNewTaskData = await applicationsAPI.getTaskById(response.data)
        dispatch(setOneTask(responseNewTaskData.data));
        return response.data;
    }
}


export const setTasks = (tasks) => ({type: SET_TASKS, tasks});
export const setOneTask = (task) => ({type: SET_ONE_TASK, task});
export const setPriorities = (priorities) => ({type: SET_PRIORITIES, priorities})
export const deleteTasks = () => ({type: DELETE_TASKS})
