import React, { Component } from 'react'
import TitleAndDes from './components/title_and_des'
import CreateAccountForm from './components/create_account_form'
import LoginForm from './components/login_form'
import AccountsList from './components/accounts_list'
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <Container>
        <LeftContainer>
          <TitleAndDes />

          <CreateAccountForm />

          <LoginForm />
        </LeftContainer>

        <RightContainer>
          <AccountsList />
        </RightContainer>
      </Container>
    )
  }
}

const Container = styled.div``
const LeftContainer = styled.div``
const RightContainer = styled.div``

export default App
