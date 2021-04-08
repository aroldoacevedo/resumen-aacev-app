import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
  
import { ListCountry } from '../components/ListCountry';
import { ListSummary } from '../components/ListSummary';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ ListSummary } />   
                    <Route exact path="/country/:name" component={ ListCountry  } />

                    <Redirect to="/" />   
                </Switch>
            </div>
        </Router>
    )
}
