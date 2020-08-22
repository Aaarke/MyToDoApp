import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        // this.handleUsernameChange=this.handleUsernameChange.bind(this)
        // this.handlePasswordChange=this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.onLoginClicked = this.onLoginClicked.bind(this)
    }
    handleChange(event) {
        console.log(event.target.value)
        this.setState({ [event.target.name]: event.target.value })
    }

    onLoginClicked() {
        if (this.state.username === 'in28minutes' && this.state.password === 'dummy') {
            //{/welcome}
            AuthenticationService.registerSuccessfullLogin(this.state.username, this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)

            //this.setState({showSuccessMessage:true})
            //this.setState({hasLoginFailed:false})
        } else {
            console.log('Invalid Credential')
            this.setState({ showSuccessMessage: false })
            this.setState({ hasLoginFailed: true })
        }

    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid creadentails</div>}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}

                    { /*<ShowInvalidCredential hasLoginFailed={this.state.hasLoginFailed}/>*/}
                    { /* <IsLoginSuccessful showSuccessMessage={this.state.showSuccessMessage}/>*/}
           User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
           Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
           <span> </span>
           <span> </span>

                    <button className="btn btn-success" onClick={this.onLoginClicked}>Login</button>
                </div>
            </div>

        )
    }


}

export default LoginComponent