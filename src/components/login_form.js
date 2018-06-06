import React, { Component } from 'react'
import styled from 'styled-components'

class LoginForm extends Component {
    render() {
        return (
            <Container>
                <h3>Login</h3>

                <form
                    onSubmit={event => this.handleSubmit(event)}
                    method="POST">
                    <label>Enter Username</label>
                    <input placeholder="username"/>
                    <label>Enter Password</label>
                    <input placeholder="password"/>
                    {/* <button>Login</button> */}
                    <input type="submit" />
                </form>
            </Container>
        )
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log('wat')
        
        fetch('/login', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                name: 'x'
            })
          })
        .then(res => {

        })
        .catch(res => {
            console.log('fail')
        })
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`

export default LoginForm
