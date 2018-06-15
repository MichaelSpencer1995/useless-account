import React, { Component } from 'react'
import TitleAndDes from './components/title_and_des'
import CreateAccountForm from './components/create_account_form'
import LoginForm from './components/login_form'
import AccountsList from './components/accounts_list'
import Account from './components/account'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'
let users

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      loggedInUserCridentials: null,
      loginView: false,
      loadingView: true,
      accountsView: false
    }
  }
  
  componentWillMount() {
    this.getUsers()
  }
  
  getUsers() {
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
    let cardColor, borderColor, primaryColor, secondaryColor
    
    if(this.state.loginView) {
      return (
        <Container>
            <TitleAndDes />

            <FormsContainer>
              <LoginForm />

              <CreateAccountForm
                users = {users}
                setLogInCridentials = {userCridentials => {
                  this.setState({
                    loggedInUserCridentials: userCridentials
                  })
                }}
                showLoadingView = {() => {
                  this.setState({
                    loginView: false,
                    loadingView: true,
                    accountsView: false
                  })
                }}
                showAccountsView = {() => {
                  this.setState({
                    loginView: false,
                    loadingView: false,
                    accountsView: true
                  })
                }} 
              />
            </FormsContainer>
        </Container>
      )
    }
    if(this.state.accountsView) {
      switch(this.state.loggedInUserCridentials.theme) {
        case 'light':
            cardColor = '#f7f7f7'
            borderColor = '#dc5d5d'
            primaryColor = '#d43131'
            secondaryColor = '#d43131'
                break
        
        case 'dark':
            cardColor = '#3c273c'
            borderColor = '#271427'
            primaryColor = '#271427'
            secondaryColor = '#686790'
                break

        case 'winter':
            cardColor = '#d8d8d8'
            borderColor = '#009688'
            primaryColor = '#403d3d'
            secondaryColor = '#007380'
                break

        case 'fall':
            cardColor = '#ff8338'
            borderColor = '#F44336'
            primaryColor = '#803c00'
            secondaryColor = '#ffde5e'
                break
      }

      return (
        <Container>
          <TitleAndDes />
          <ListAndLogOutContainer>
            <Account
                      username = { this.state.loggedInUserCridentials.username }
                      motto = { this.state.loggedInUserCridentials.motto }
                      cardColor = { cardColor } 
                      borderColor = { borderColor }
                      primaryColor = { primaryColor }
                      secondaryColor = { secondaryColor }/>

            <AccountsList
              loggedInUserCridentials={this.state.loggedInUserCridentials}
              users={users}/>

            <LogOut
                onClick = {() => this.getUsers()}>Log Out</LogOut>
          </ListAndLogOutContainer>
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
  
  @media(max-width: 1040px) {
    padding: 50px 90px;
  }
  @media(max-width: 770px) {
    padding: 30px 30px;
    width: 80%;
  }
`

const ListAndLogOutContainer = styled.div`
  align-self: flex-start;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const LogOut = styled.button`
  height: 40px;
  margin-top: 30px;
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
