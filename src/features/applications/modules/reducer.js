import {applicationsAPI} from "../../../api/api";

const SET_TASKS = '/application/SET_TASKS';
const SET_PRIORITIES = '/application/SET_PRIORITIES';
const DELETE_TASKS = '/application/DELETE_TASKS';


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


export const setTasks = (tasks) => ({type: SET_TASKS, tasks});
export const setPriorities = (priorities) => ({type: SET_PRIORITIES, priorities})
export const deleteTasks = () => ({type: DELETE_TASKS})
