import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect ,
  } from "react-router-dom";
import App from '../layouts/App';
import Shap from '../pages/antvG6/shap';
import Behavior from '../pages/antvG6/behavior';
import BigDataShow from '../pages/bigDataShow';




export default function index() {
    return (
        <Router>
            <Switch>             
                <Route path="/antvG6" component={
                    ()=>(
                        <App>
                            <Route exact path="/antvG6/shap" component={Shap}></Route>
                            <Route exact path="/antvG6/behavior" component={Behavior}></Route>
                            <Redirect to="/antvG6/shap" push/>
                        </App> 
                    )}>
                </Route>
                <Route path="/bigDataShow" component={
                    ()=>(
                        <App>
                            <Route path="/bigDataShow" component={BigDataShow}></Route>
                        </App> 
                    )}>
                </Route>
                <Route path="/" render={()=>( <Redirect to="/antvG6/shap" push/> )}/>
            </Switch>
        </Router>
    )
}
