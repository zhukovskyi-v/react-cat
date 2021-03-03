import React from 'react'
import './App.scss';

import {Route, Switch} from "react-router-dom";
import {CatPage} from "../Pages/CatPage";
import {MainPage} from "../Pages/MainPage";

export const App = () => {

    return (
        <div className="App">
            <Switch>
                <Route path='/' exact>
                    <MainPage/>
                </Route>
                <Route path={`/:topicId`}>
                    <CatPage/>
                </Route>
            </Switch>
        </div>
    );
}



