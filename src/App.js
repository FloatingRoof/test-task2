import React from 'react';
import './App.css';
import {Header} from "./features/header/components/Header";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {Route, Routes} from "react-router";
import {Applications} from "./features/applications/components/Applications";
import {Clients} from "./features/clients/components/Clients";
import {Settings} from "./features/settings/components/Settings";
import {KnowledgeBase} from "./features/knowledge-base/components/Knowledge-base";
import {Employees} from "./features/employees/components/Employees";
import {Assets} from "./features/assets/components/Assets";
import {Search} from "./features/header/components/Search";

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className="App">
                    <div className="App__header-block">
                        <Header/>

                    </div>
                    <div className="App__content-block">
                        <div className="App__search">
                            <Search/>
                        </div>
                        <Routes>
                            <Route path="/applications" element={<Applications/>}/>
                            <Route path="/clients" element={<Clients/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                            <Route path="/knowledge-base" element={<KnowledgeBase/>}/>
                            <Route path="/employees" element={<Employees/>}/>
                            <Route path="/assets" element={<Assets/>}/>
                        </Routes>
                    </div>

                </div>

            </Provider>
        </BrowserRouter>
    );
}

export default App;
