import React, { Component } from 'react'
import styled from 'styled-components'

class CreateAccountForm extends Component {
    constructor(){
        super()

        this.state = {
            usernameValue: '',
            passwordValue: '',
            confirmPasswordValue: '',
            mottoValue: ''
        }
    }

    render() {
        return (
            <Container>
                <h3>Create Account</h3>

                <form
                    onSubmit={event => this.handleSubmit(event)}
                    method="POST">
                    <label>Create Username</label>
                    <input 
                        placeholder="username"
                        onChange={event => this.updateInputValueInState(event)} 
                        name="usernameValue" />

                    <label>Create Password</label>
                    <input
                        placeholder="password"
                        onChange={event => this.updateInputValueInState(event)}
                        name="passwordValue" />

                    <label>Confirm Password</label>
                    <input
                        placeholder="password"
                        onChange={event => this.updateInputValueInState(event)} 
                        name="confirmPasswordValue" />

                    <label>Create Motto(optional)</label>
                    <input
                        placeholder="motto"
                        onChange={event => this.updateInputValueInState(event)}
                        name="mottoValue" />
                    
                    <button>Create Account</button>
                </form>
            </Container>
        )
    }

    updateInputValueInState(e) {
        let change = {}
    
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state)
        
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
            console.log('success')
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

export default CreateAccountForm
