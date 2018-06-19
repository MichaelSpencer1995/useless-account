import React, { Component } from 'react'
import styled from 'styled-components'
import Account from './account'

class AccountsListComponent extends Component {
    render() {
        const Accounts = this.props.users.map(account => {
            const currentUsersAccount = account.username === this.props.loggedInUserCridentials.username

            if(currentUsersAccount) {
                return
            }
            
            let cardColor, borderColor, primaryColor, secondaryColor

            switch(account.theme) {
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
                <Account
                    username = { account.username }
                    motto = { account.motto }
                    cardColor = { cardColor } 
                    borderColor = { borderColor }
                    primaryColor = { primaryColor }
                    secondaryColor = { secondaryColor }/>
            )
        })

        return (
            <AccountsList>
                { Accounts }
            </AccountsList>
        )
    }
}

const AccountsList = styled.div`
    margin-top: 4px;
    width: 100%;
    position: relative;
    max-height: 308px;
    overflow: scroll;
    box-sizing: border-box;
    border-top: none;
    
    ::-webkit-scrollbar {
        width: 12px;
    }
    ::-webkit-scrollbar-track {
        background: white;
        position: relative;
        left: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: #ddd;
        border: #ddd 1px solid;
        border-radius: 5px;
        position: relative;
    }
`

export default AccountsListComponent
