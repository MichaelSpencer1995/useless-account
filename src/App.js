import React, { Component } from 'react'
import TitleAndDes from './components/title_and_des'
import CreateAccountForm from './components/create_account_form'
import LoginForm from './components/login_form'
import AccountsList from './components/accounts_list'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'
let users

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      loginView: false,
      loadingView: true,
      accountsView: false
    }
  }
  
  componentWillMount() {
    fetch('/get-users-from-database', {
        method: 'post',
        headers: {'Content-Type':'application/json'}
      })
    .then(res => res.json())
    .then(data => {
        users = data
        this.setState({
          loginView: true,
          loadingView: false,
          accountsView: false
        })
        console.log(users)
    })
    .catch(res => {
        alert('something went wrong, refresh the page and try again')
    })
  }

  render() {
    if(this.state.loginView) {
      return (
        <Container>
            <TitleAndDes />

            <FormsContainer>
              <LoginForm />

              <CreateAccountForm
                users = {users}
                showLoadingView = {() => {
                  this.setState({
                    loginView: false,
                    loadingView: true,
                    accountsView: false
                  })
                }}
                showAccountsView = {() => {
                  this.setState({
                    loginView: true,
                    loadingView: false,
                    accountsView: false
                  })
                }} 
              />
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
    if(this.state.loadingView) {
      return (
        <Container>
          <Loader
            type="TailSpin"
            color="#03a9f4"
            height="100"
            width="100"
          />   
        </Container>
      )
    }
  }
}

const Container = styled.div`
  width: 60%;
  min-height: 100vh;
  background: white;
  margin: 0 auto;
  padding: 50px 110px;
  box-sizing: border-box;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media(max-width: 1040px) {
    padding: 50px 90px;
  }
  @media(max-width: 770px) {
    padding: 30px 30px;
    width: 80%;
  }
`

const FormsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 38px;

  @media(max-width: 1040px) {
    flex-direction: column;
  }

  > * {
    flex-basis: 47.5%;
  }
`

export default App
