import { connect } from 'react-redux';
import React from 'react';
import { withRouter, Link, Route, Switch } from 'react-router-dom';
import { compose } from 'redux';
import { Todo } from './Todo';
import { About } from './About';
import { Login } from './Login';

function Apps(props) {
    console.log({ props });
    return (
        <div>
            <header>
                {["todo", "about"].map((route) => (
                    <div>
                        <Link to={`/${route}`}>{route}</Link>
                    </div>
                ))}
            </header>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path = "/todo">
                    <Todo />
                </Route>
                <Route path = "/about">
                    <About />
                </Route>
            </Switch>
        </div>
    )
};


const mapStateToProps = (state) => ({
    value: state.value
});

export const App = compose(withRouter, connect(mapStateToProps))(Apps);
