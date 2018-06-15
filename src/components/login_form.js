import React, { Component } from 'react'
import styled from 'styled-components'

let attemptedLoginUserIndex = null

class LoginForm extends Component {
    constructor(){
        super()

        this.state = {
            usernameValue: '',
            passwordValue: '',
            usernameValid: true,
            passwordValid: true
        }
    }

    render() {
        return (
            <Container>
                <h3>Login</h3>

                <form
                    onSubmit={event => this.handleSubmit(event)}
                    method="POST">
                    <LabelErrorMessageContainer> 
                        <label>Enter Username</label>

                        <ErrorMessage
                            valid={this.state.usernameValid}>
                            *Username does not exist
                        </ErrorMessage>
                    </LabelErrorMessageContainer>
                    <input
                        name="usernameValue"
                        value={this.state.usernameValue}
                        onChange={event => this.updateInputValueInState(event)}
                        placeholder="username" />

                    <LabelErrorMessageContainer>
                        <label>Enter Password</label>

                        <ErrorMessage
                            valid={this.state.passwordValid}>
                            *Password incorrect
                        </ErrorMessage>
                    </LabelErrorMessageContainer>
                    <input
                        type="password"
                        name="passwordValue"
                        value={this.state.passwordValue}
                        onChange={event => this.updateInputValueInState(event)}
                        placeholder="password" />

                    <button>Login</button>
                </form>
            </Container>
        )
    }

    updateInputValueInState(e) {
        let change = {}
    
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    checkIfUserNameExists(username) {
        const users = this.props.users
        let usernameExists = false

        for(let i = 0; i < users.length; i++) {
            if(users[i].username.toLowerCase() === username.toLowerCase()) {
                usernameExists = true
                attemptedLoginUserIndex = i
            }
        }
        return usernameExists
    }

    confirmLoginCridentials() {
        const users = this.props.users
        const usernameExists = this.checkIfUserNameExists(this.state.usernameValue)
        
        if(usernameExists){
            const passwordsMatch = users[attemptedLoginUserIndex].password === this.state.passwordValue
            this.setState({ usernameValid: true })

            if(passwordsMatch){
                this.setState({ passwordValid: true })
                return true
                // login
            } else {
                // set passwords dont match error in state
                this.setState({ passwordValid: false })
                return false
            }
        } else {
            // set username does not exist
            this.setState({ usernameValid: false })
            return false
        }    
    }

    handleSubmit(event) {
        event.preventDefault()
        if(this.confirmLoginCridentials()) {
            const user = this.props.users[attemptedLoginUserIndex]

            const loginCridentials = {
                username: user.username,
                password: user.password,
                motto: user.motto,
                theme: user.theme
            }

            this.props.setLogInCridentials(loginCridentials)
            this.props.showAccountsView()
        }
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;

    @media(max-width: 1040px) {
        h3 {
            margin-top: -10px;
        }
    }

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        button {
            width: 66px;
        }
    }
`
const LabelErrorMessageContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`
const ErrorMessage = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: #d01a1a;
    display: ${({ valid }) => valid ? "none" : "block" };
`

export default LoginForm
