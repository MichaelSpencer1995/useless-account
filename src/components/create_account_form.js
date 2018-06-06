import React, { Component } from 'react'
import styled from 'styled-components'

class CreateAccountForm extends Component {
  render() {
    return (
        <Container>
            <h3>Create Account</h3>

            <form>
                <label>Create Username</label>
                <input placeholder="username"/>
                <label>Create Password</label>
                <input placeholder="password"/>
                <label>Create Motto(optional)</label>
                <input placeholder="motto"/>
                <button>Create Account</button>
            </form>
        </Container>
    )
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

export default CreateAccountForm
