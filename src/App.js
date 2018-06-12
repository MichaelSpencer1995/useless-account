import React, { Component } from 'react'
import TitleAndDes from './components/title_and_des'
import CreateAccountForm from './components/create_account_form'
import LoginForm from './components/login_form'
import AccountsList from './components/accounts_list'
import styled from 'styled-components'

class App extends Component {
  constructor(props) {
    super(props)
    

  }

  render() {
    return (
      <Container>
        <LeftContainer>
          <TitleAndDes />

          <FormsContainer>
            <LoginForm />

            <CreateAccountForm />
          </FormsContainer>
        </LeftContainer>

        <AccountsList />
      </Container>
    )
  }
}

const Container = styled.div`
  width: 45%;
  margin: 0 auto;
  margin-top: 50px;
  // display: flex;
  // justify-content: space-between;

  > * {
    // flex-basis: 48%;
  }
`

const FormsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  > * {
    flex-basis: 47.5%;
  }
`
const LeftContainer = styled.div``
const RightContainer = styled.div``

export default App
