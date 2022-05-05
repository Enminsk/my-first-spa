import { connect } from 'react-redux';
import React, { useState } from 'react';
import { withRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { Todo } from './Todo';
import { About } from './About';
import { Login } from './Login';
import css from './app.module.css';


function Apps(props) {
    const [state, setState] = useState({ isAuth: false });
    
    const Header = () => {
        return (
            <header className={css.header}>
                {["TODO", "ABOUT"].map((route) => (
                    <div className={css.menu}>
                        <Link to={`/${route}`}>{route}</Link>
                    </div>
                ))}
                {state.isAuth && <button onClick = {() => {
                    setState({ isAuth: false });
                }}
                >
                    EXIT
                </button>}
            </header>
        )
    };

    return (
        <div>
            <Header />
            <Switch>
                <Route path="/login">
                    <Login />
                    <button onClick = {() => {
                        setState({ isAuth: true });
                    }}
                    >
                        Зайти
                    </button>
                </Route>
                {!state.isAuth && <Redirect to="/login" />}
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


export const App = compose(withRouter, connect())(Apps);
