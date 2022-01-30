import React, {useEffect, useState} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {deleteTasks, getApplicationData} from "../modules/reducer";
import {Applications} from "./Applications";
import Preloader from "../../common/Preloader/Preloader";

const ApplicationEffects = (props) => {


    let [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        if (!isFetching) {
            props.getApplicationData();
            setIsFetching(true);
        }
        return function () {
            props.deleteTasks();
        }

    }, [isFetching]);

    return (
        <>
            {props.tasks.length ? <Applications tasks={props.tasks} priorities={props.priorities}/> : <Preloader />}
        </>
    )
}

let mapStateToProps = (state) => {
    return {
        tasks: state.applicationReducer.tasks,
        priorities: state.applicationReducer.priorities
    }
}

export const ApplicationContainer = compose(
    connect(mapStateToProps, {getApplicationData,deleteTasks}),
)(ApplicationEffects);
