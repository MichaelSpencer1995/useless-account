import React, { Component } from 'react'
import styled from 'styled-components'

class LoginForm extends Component {
    constructor(){
        super()

        this.state = {
            usernameValue: '',
            passwordValue: ''
        }
    }

    render() {
        return (
            <Container>
                <h3>Login</h3>

                <form
                    onSubmit={event => this.handleSubmit(event)}
                    method="POST"
                >
                    <label>Enter Username</label>
                    <input 
                        value={this.state.name}
                        onChange={(this.updateInputValueInState.bind(this))}
                        name="usernameValue"
                        placeholder="username"
                    />

                    <label>Enter Password</label>
                    <input
                        value={this.state.name}
                        onChange={(this.updateInputValueInState.bind(this))} 
                        name="passwordValue"
                        placeholder="password"
                    />

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

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state)
        
        fetch('/login', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                username: this.state.usernameValue,
                password: this.state.passwordValue
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
    // justify-content: space-between;

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        button {
            width: 66px;
        }
    }
`

export default LoginForm
