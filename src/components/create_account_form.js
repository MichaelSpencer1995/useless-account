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
            confirmPasswordValid: true,
            mottoValid: true
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
                        onChange={event => this.updateInputValueInState(event, true)}
                        name="usernameValue" />

                    <LabelErrorMessageContainer>
                        <label>Password</label>

                        <ErrorMessage
                            valid={this.state.passwordValid}>
                            *Password is not long enough
                        </ErrorMessage>
                    </LabelErrorMessageContainer>
                    <input
                        placeholder="password"
                        onChange={event => this.updateInputValueInState(event)}
                        name="passwordValue" />

                    <LabelErrorMessageContainer>
                        <label>Confirm password</label>

                        <ErrorMessage
                            valid={this.state.confirmPasswordValid}>
                            *Passwords do not match
                        </ErrorMessage>
                    </LabelErrorMessageContainer>
                    <input
                        placeholder="password"
                        onChange={event => this.updateInputValueInState(event)} 
                        name="confirmPasswordValue" />

                    <LabelErrorMessageContainer>
                        <label>Motto</label>

                        <ErrorMessage
                            valid={this.state.mottoValid}>
                            *Motto can not be left blank
                        </ErrorMessage>
                    </LabelErrorMessageContainer>
                    <input
                        placeholder="motto"
                        onChange={event => this.updateInputValueInState(event)}
                        name="mottoValue" />
                    
                    <button>Create Account</button>
                </form>
            </Container>
        )
    }

    updateInputValueInState(e, isUsernameInput) {
        let change = {}
    
        change[e.target.name] = e.target.value
        if(isUsernameInput){
            this.setState(change, () => this.checkIfUsernameIsAvailable())
        } else {
            this.setState(change)
        }

    }

    checkIfUsernameIsAvailable() {
        //probably should be pulled out
        const usernames = this.props.users.map(user => user.username.toLowerCase())
        const usernameUnavailable = usernames.indexOf(this.state.usernameValue.toLowerCase()) !== -1

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

    updatePasswordValidity() {}

    updatePasswordConfirmationValidity() {}

    updateMottoValidity() {}

    validateForm() {
        const formValid = this.state.usernameValid &&
                          this.state.passwordValid &&
                          this.state.confirmPasswordValid &&
                          this.state.mottoValid

        if(formValid) {
            return true
        }
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
