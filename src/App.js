import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
        <div className="App">
            <div className="App__header-block">
                <Header/>
            </div>
            <div className="App_content-block">

            </div>

        </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
