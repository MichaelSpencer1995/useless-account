import React, { Component } from 'react'
import styled from 'styled-components'

class CreateAccountForm extends Component {
    constructor(){
        super()
        
        this.state = {
            usernameValue: '',
            passwordValue: '',
            confirmPasswordValue: '',
            mottoValue: '',
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
                            *Username is taken
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
                        onChange={event => this.updateInputValueInState(event, 'motto')}
                        name="mottoValue" />
                    
                    <button>Create Account</button>
                </form>
            </Container>
        )
    }

    componentWillMount() {
        window.usernames = this.props.users.map(user => user.username.toLowerCase())
    }

    updateInputValueInState(e, input) {
        let change = {}
    
        change[e.target.name] = e.target.value
    
        switch(input) {
            case 'username':
                this.setState(change, () => this.checkIfUsernameIsAvailable())
                    break;

            case 'password':
                this.setState(change, () => this.validatePassword())
                    break;

            case 'confirmPassword':
                this.setState(change, () => this.validateConfirmPassword())
                    break;

            case 'confirmMotto':
                this.setState(change)
                    break;
        }
    }

    checkIfUsernameIsAvailable() {
        const usernameUnavailable = window.usernames.indexOf(this.state.usernameValue.toLowerCase()) !== -1

        if(usernameUnavailable) {
            console.log(this.state.usernameValue)
            this.setState({
                usernameValid: false
            })
        } else {
            console.log(this.state.usernameValue)
            this.setState({
                usernameValid: true
            })
        }
    }

    validatePassword() {
        const confirmPasswordFieldNotBlank = this.state.confirmPasswordValue !== ''
        const passwordsMatch = this.state.passwordValue === this.state.confirmPasswordValue
        const passwordLongEnough = this.state.passwordValue.length >= 5
        
        if(confirmPasswordFieldNotBlank) {
            if(passwordsMatch) {
                this.setState({ confirmPasswordValid: true })
            } else {
                this.setState({ confirmPasswordValid: false })
            }
        }

        if(passwordLongEnough) {
            this.setState({ passwordValid: true })
        } else {
            this.setState({ passwordValid: false })
        }
    }

    validateConfirmPassword() {
        const passwordsMatch = this.state.passwordValue === this.state.confirmPasswordValue

        if(passwordsMatch) {
            this.setState({ confirmPasswordValid: true })
        } else {
            this.setState({ confirmPasswordValid: false })
        }
    }

    validateForm() {
        const formValid = this.state.usernameValid &&
                          this.state.passwordValid &&
                          this.state.confirmPasswordValid

        if(formValid) {
            return true
        }
        alert('please fix the indicated fields')
        return false
    }

    handleSubmit(event) {
        event.preventDefault()
        
        const valid = this.validateForm()

        if(!valid) {
            return
        }
        
        this.props.showLoadingView()
        
        fetch('/create-account', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                username: this.state.usernameValue,
                password: this.state.passwordValue,
                motto: this.state.mottoValue
            })
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
