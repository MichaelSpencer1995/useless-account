import React, { Component } from 'react'
import styled from 'styled-components'

class CreateAccountForm extends Component {
    constructor(){
        super()

        this.state = {
            usernameValue: '',
            passwordValue: '',
            mottoValue: ''
        }
    }

    render() {
        return (
            <Container>
                <h3>Create Account</h3>

                <form
                    onSubmit={event => this.handleSubmit(event)}
                    method="POST"
                >
                    <label>Create Username</label>
                    <input 
                        placeholder="username"
                        value={this.state.name}
                        onChange={(this.updateInputValueInState.bind(this))} 
                        name="usernameValue"
                    />

                    <label>Create Password</label>
                    <input
                        placeholder="password"
                        value={this.state.name}
                        onChange={(this.updateInputValueInState.bind(this))} 
                        name="passwordValue"
                    />
                    
                    <label>Create Motto(optional)</label>
                    <input
                        placeholder="motto"
                        value={this.state.name}
                        onChange={(this.updateInputValueInState.bind(this))} 
                        name="mottoValue"    
                    />
                    
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
    // justify-content: space-between;

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        button {
            width: 130px;
        }
    }
`

export default CreateAccountForm
