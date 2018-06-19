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
        method: 'get',
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
              <LoginForm 
                users={users}
                setLogInCridentials = {userCridentials => {
                  this.setState({
                    loggedInUserCridentials: userCridentials
                  })
                }}
                showAccountsView = {() => {
                  this.setState({
                    loginView: false,
                    loadingView: false,
                    accountsView: true
                  })
                }}/>

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
          borderColor = '#cccccc'
          primaryColor = '#505050'
          secondaryColor = '#939fa5'
                break
        
        case 'dark':
            cardColor = '#2d262d'
            borderColor = '#9093ff'
            primaryColor = '#e0e0e0'
            secondaryColor = '#686790'
                break

        case 'winter':
            cardColor = '#d8d8d8'
            borderColor = '#90c5c0'
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
            <MyAccount>
              <Account
                usersAccount
                username = { this.state.loggedInUserCridentials.username }
                motto = { this.state.loggedInUserCridentials.motto }
                cardColor = { cardColor } 
                borderColor = { borderColor }
                primaryColor = { primaryColor }
                secondaryColor = { secondaryColor }/>
            </MyAccount>

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
  align-items: center;
  
  p {
    margin-bottom: 20px;
  }
  
  @media(max-width: 1040px) {
    padding: 50px 90px;
  }
  @media(max-width: 840px) {
    padding: 30px 30px;
    width: 100%;
  }
`

const ListAndLogOutContainer = styled.div`
  align-self: flex-start;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const MyAccount = styled.div`
    border: #adadad 1px solid;
    height: 61px;
    border-radius: 5px;
    padding: 1px;
`

const LogOut = styled.button`
  height: 36px;
  margin-top: 0px;
  width: 100px;
  align-self: flex-end;
  
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
