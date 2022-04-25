import React from 'react';


export class Login extends React.Component {
    state = {
        login: '',
        password: '',
    }

    dengerError = () => {
        if (this.state.login.length > 5) {
            return <h3>Минимальная длинна поля 5 символов</h3>;
        }
        return this.setState({ isModalVisible: true })
    }

    render() {
        const { login, password } = this.state;

        return <div>
            <h1>SIGN UP</h1>
            <form>
                <label>
                    Login:
                    <input type="text" value={login} onChange={(e) => this.setState({ login: e.target.value })} />
                </label>
                {this.state.login && <span>Минимальная длинна поля 5 символов</span>}
                <label>
                    Password:
                    <input type="Password" value={password} onChange={(e) => this.setState({ password: e.target.value })} />
                </label>
                {this.state.password && <span>Минимальная длинна поля 5 символов</span>}
            </form>
        </div>
    }
}
