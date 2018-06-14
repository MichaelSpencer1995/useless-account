import React, { Component } from 'react'
import styled from 'styled-components'
import Account from './account'

class AccountsListComponent extends Component {
    render() {
        //these are for the user account
        let cardColor, borderColor, primaryColor, secondaryColor
        
        const Accounts = this.props.users.map(account => {
            //these are for the accounts on the database
            let cardColor, borderColor, primaryColor, secondaryColor

            switch(account.theme) {
                case 'light':
                    cardColor = 'orange'
                    borderColor = 'brown'
                    primaryColor = 'red'
                    secondaryColor = 'purple'
                        break
                
                case 'dark':
                    cardColor = 'purple'
                    borderColor = 'blue'
                    primaryColor = 'green'
                    secondaryColor = 'yellow'
                        break

                case 'winter':
                    cardColor = 'purple'
                    borderColor = 'blue'
                    primaryColor = 'green'
                    secondaryColor = 'yellow'
                        break

                case 'fall':
                    cardColor = 'purple'
                    borderColor = 'blue'
                    primaryColor = 'green'
                    secondaryColor = 'yellow'
                        break
            }

            return (
                <Account
                    usersAccount = { 'initial' }
                    username = { account.username }
                    motto = { account.motto }
                    cardColor = { cardColor } 
                    borderColor = { borderColor }
                    primaryColor = { primaryColor }
                    secondaryColor = { secondaryColor }/>
            )
        })

        switch(this.props.loggedInUserCridentials.theme) {
            case 'light':
                cardColor = 'orange'
                borderColor = 'brown'
                primaryColor = 'red'
                secondaryColor = 'purple'
                    break
            
            case 'dark':
                cardColor = 'purple'
                borderColor = 'blue'
                primaryColor = 'green'
                secondaryColor = 'yellow'
                    break

            case 'winter':
                cardColor = 'purple'
                borderColor = 'blue'
                primaryColor = 'green'
                secondaryColor = 'yellow'
                    break

            case 'fall':
                cardColor = 'purple'
                borderColor = 'blue'
                primaryColor = 'green'
                secondaryColor = 'yellow'
                    break
        }

        return (
            <AccountsList>
                <Account
                    usersAccount = { 'fixed' }
                    username = { this.props.loggedInUserCridentials.username }
                    motto = { this.props.loggedInUserCridentials.motto }
                    cardColor = { cardColor } 
                    borderColor = { borderColor }
                    primaryColor = { primaryColor }
                    secondaryColor = { secondaryColor }/>

                { Accounts }
            </AccountsList>
        )
    }
}

const AccountsList = styled.div`
    margin-top: 40px;
    width: 300px;
    position: relative;
    height: 308px;
    overflow: scroll;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border: #ccc 1px solid;
    border-top: none;
    align-self: flex-start;
`

export default AccountsListComponent
