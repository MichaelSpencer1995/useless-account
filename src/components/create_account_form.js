import React, { Component } from 'react'
import styled from 'styled-components'

class CreateAccountForm extends Component {
    constructor() {
        super()
        
        this.state = {
            usernameErrorMessage: '*Username is taken',
            usernameValue: '',
            passwordValue: '',
            confirmPasswordValue: '',
            mottoValue: '',
            themeValue: 'light',
            usernameValid: true,
            passwordValid: true,
            confirmPasswordValid: true
        }
    }
    
    
    render() {
        return (
            <Container>
                <h3>Create Account</h3>

                <form
                    onSubmit={event => this.handleSubmit(event)}
                    method="POST">
                    <LabelErrorMessageContainer>
                        <label>Create Username</label>

                        <ErrorMessage
                            valid={this.state.usernameValid}>
                            {this.state.usernameErrorMessage}
                        </ErrorMessage>
                    </LabelErrorMessageContainer>
                    <input 
                        placeholder="username"
                        onChange={event => this.updateInputValueInState(event, 'username')}
                        name="usernameValue" />

                    <LabelErrorMessageContainer>
                        <label>Password</label>

                        <ErrorMessage
                            valid={this.state.passwordValid}>
                            *Password is too short
                        </ErrorMessage>
                    </LabelErrorMessageContainer>
                    <input
                        type="password" 
                        placeholder="password"
                        onChange={event => this.updateInputValueInState(event, 'password')}
                        name="passwordValue" />

                    <LabelErrorMessageContainer>
                        <label>Confirm password</label>

                        <ErrorMessage
                            valid={this.state.confirmPasswordValid}>
                            *Passwords do not match
                        </ErrorMessage>
                    </LabelErrorMessageContainer>
                    <input
                        type="password" 
                        placeholder="re-type password"
                        onChange={event => this.updateInputValueInState(event, 'confirmPassword')}
                        name="confirmPasswordValue" />

                    <label>Motto(optional)</label>
                    <input
                        placeholder="motto"
                        onChange={event => this.updateInputValueInState(event)}
                        name="mottoValue" />

                    <label>Theme</label>
                    <select
                        onChange={event => this.updateInputValueInState(event)}
                        name="themeValue">
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        <option value="winter">Winter</option>
                        <option value="fall">Fall</option>
                    </select>

                    <button>Create Account</button>
                </form>
            </Container>
        )
    }

    componentWillMount() {
        window.usernames = this.props.users.map(user => user.username.toLowerCase())
    }

    updateInputValueInState(e, input) {
        //the input is passed through to set state "synchronously"
        let change = {}
    
        change[e.target.name] = e.target.value
    
        switch(input) {
            case 'username':
                this.setState(change, () => this.checkIfUsernameIsAvailable())
                    break

            case 'password':
                this.setState(change, () => this.validatePassword())
                    break

            case 'confirmPassword':
                this.setState(change, () => this.validateConfirmPassword())
                    break

            default:
                this.setState(change)
                    break
        }
    }

    checkIfUsernameIsAvailable() {
        console.log('this for sure runs')
        
        const usernameUnavailable = window.usernames.indexOf(this.state.usernameValue.toLowerCase()) !== -1
        const usernameLongEnough = this.state.usernameValue.length >= 5
        
        if(!usernameLongEnough) {
            this.setState({
                usernameErrorMessage: '*Username is too short',
                usernameValid: false,
            })
            return false
        } else {
            if(usernameUnavailable) {
                this.setState({
                    usernameErrorMessage: '*Username is already taken',
                    usernameValid: false,
                })
                return false
            } else {
                this.setState({
                    usernameValid: true,
                })
                return true
            }
        }
    }

    validatePassword() {
        console.log('does it even run?')
        const confirmPasswordFieldNotBlank = this.state.confirmPasswordValue !== ''
        const passwordsMatch = this.state.passwordValue === this.state.confirmPasswordValue
        const passwordLongEnough = this.state.passwordValue.length >= 5
        
        if(!passwordLongEnough) {
            this.setState({
                passwordValid: false
            })
            return false
        } else {
            this.setState({
                passwordValid: true
            })
            return true
        }
    }

    validateConfirmPassword() {
        const passwordsMatch = this.state.passwordValue === this.state.confirmPasswordValue

        if(passwordsMatch) {
            this.setState({
                confirmPasswordValid: true
            })
            return true
        } else {
            this.setState({
                confirmPasswordValid: false
            })
            return false
        }
    }

    validateForm() {
        // this.checkIfUsernameIsAvailable()
        // this.validatePassword()
        // this.validateConfirmPassword()
        // // only reason these are getting ran first is because
        // // in the form valid variable below, if username fails,
        // // the next functions don't run and therefor don't
        // // alert the user of all the incorrect fields
        
        const formValid = this.checkIfUsernameIsAvailable() &&
                          this.validatePassword() &&
                          this.validateConfirmPassword()

        if(formValid) {
            return true
        }
        alert('please fix the indicated fields')
        return false
    }
    
    handleSubmit(event) {
        event.preventDefault()
        
        const valid = this.validateForm()
        let loginCridentials = null

        if(!valid) {
            return
        }

        loginCridentials = {
            username: this.state.usernameValue,
            password: this.state.passwordValue,
            motto: this.state.mottoValue,
            theme: this.state.themeValue
        }

        
        this.props.setLogInCridentials(loginCridentials)
        this.props.showLoadingView()
        
        fetch('/create-account', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(loginCridentials)
          })
        .then(res => {
            this.props.showAccountsView()
        })
        .catch(res => {
            console.log('fail')
        })
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;

    @media(max-width: 1040px) {
        margin-top: 35px;
        border-top: #d0d0d0 1px solid;

        h3 {
            padding-top: 12px;
        }
    }

    form {
        width: 100%;
        display: flex;
        flex-direction: column;

        button {
            width: 130px;
            margin-bottom: 60px;
        }
    }
`

const LabelErrorMessageContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

const ErrorMessage = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: #d01a1a;
    display: ${({ valid }) => valid ? "none" : "block" };
`

export default CreateAccountForm
