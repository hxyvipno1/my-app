import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect ,
  } from "react-router-dom";
import App from '../layouts/App';
import Shape from '../pages/antvG6/shape';
import Behavior from '../pages/antvG6/behavior';
import Components from '../pages/antvG6/components';
import Graphin from '../pages/antvG6/graphin';
import Pie from '../pages/antvG2/pie';
import Bar from '../pages/antvG2/bar';
import BigDataShow from '../pages/bigDataShow';





export default function index() {
    return (
        <Router>
            <Switch>            
                <Route path="/antvG6" component={
                    ()=>(
                        <App>
                            <Route exact path="/antvG6/behavior" component={Behavior}></Route>
                            <Route exact path="/antvG6/shape" component={Shape}></Route>                            
                            <Route exact path="/antvG6/components" component={Components}></Route>
                            <Route exact path="/antvG6/graphin" component={Graphin}></Route>
                        </App>  
                    )}>
                </Route>
                <Route path="/antvG2" component={
                    ()=>(
                        <App>
                            <Route exact path="/antvG2/pie" component={Pie}></Route>
                            <Route exact path="/antvG2/bar" component={Bar}></Route>       
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
                <Route path="/" render={()=>( <Redirect to="/antvG6/behavior" push/> )}/>
            </Switch>
        </Router>
    )
}
