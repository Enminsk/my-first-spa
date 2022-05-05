import React from 'react';
import css from './login.module.css';


export class Login extends React.Component {
    state = {
        login: '',
        password: '',
    };

    inputChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    clickHandler = ({ isAuth }) => {
        const LOGIN = process.env.REACT_APP_LOGIN;
        const PASSWORD = process.env.REACT_APP_PASSWORD;
/*         const isValid = this.state.login === LOGIN && this.state.password === PASSWORD; */

        this.setState(() => ({
            isAuth: true,
            login: this.state.login === LOGIN ? "" : 'Не верное имя пользователя',
            password: this.state.password === PASSWORD ? "" : 'Не верны пароль',
        }))
    };

    render() {
        
        return <div className={css.login}>
            <h1 className={css.title}>SIGN UP</h1>
            <form className={css.auth}>
                <label className={css.label}>
                    Login:
                    <input className={css.input} type='text' name='login' value={this.state.login} onChange={this.inputChangeHandler} />
                </label>
                <label className={css.label}>
                    Password:
                    <input className={css.input} type='Password' name='password' value={this.state.password} onChange={this.inputChangeHandler} />
                </label>
            </form>
            <button className={css.button} type="button" onClick={this.clickHandler}>GET STARTED</button>
        </div>
    }
}
