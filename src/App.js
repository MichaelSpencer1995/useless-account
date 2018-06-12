import React, { Component } from 'react'
import TitleAndDes from './components/title_and_des'
import CreateAccountForm from './components/create_account_form'
import LoginForm from './components/login_form'
import AccountsList from './components/accounts_list'
import styled from 'styled-components'

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      loginView: true,
      loadingView: false,
      accountsView: false

      // loginView: false,
      // loadingView: false,
      // accountsView: true
    }
  }

  render() {
    if(this.state.loginView) {
      return (
        <Container>
            <TitleAndDes />

            <FormsContainer>
              <LoginForm />

              <CreateAccountForm />
            </FormsContainer>
        </Container>
      )
    }
    if(this.state.accountsView) {
      return (
        <Container>
          <TitleAndDes />
          
          <AccountsList />
        </Container>
      )
    }
  }
}

const Container = styled.div`
  width: 60%;
  height: 100vh;
  background: white;
  margin: 0 auto;
  padding: 50px 110px;
  box-sizing: border-box;
  padding-bottom: 0;
  // display: flex;
  // justify-content: space-between;

  > * {
    // flex-basis: 48%;
  }
`

const FormsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 38px;

  > * {
    flex-basis: 47.5%;
  }
`
const LeftContainer = styled.div``
const RightContainer = styled.div``


export default App
