import {applicationsAPI} from "../../../api/api";

const SET_TASKS = '/application/SET_TASKS';


let initialState = {
    tasks: []
}


export const applicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS: {
            return {
                ...state,
                tasks: [...action.tasks]
            };

        }
        default:
            return state;
    }
}


export const getApplicationData = () => async (dispatch) => {
    let response = await applicationsAPI.getApplications();


    if (response.status == 200) {
        dispatch(setTasks(response.data.value))
    } else {

    }
}


export const setTasks = (tasks) => ({type: SET_TASKS, tasks});
