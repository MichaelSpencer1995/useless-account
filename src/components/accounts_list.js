import React, { Component } from 'react'
import styled from 'styled-components'
import Account from './account'

class AccountsListComponent extends Component {
    render() {
        const Accounts = this.props.users.map(account => {
            let cardColor, borderColor, primaryColor, secondaryColor

            switch(account.theme) {
                case 'fall':
                    cardColor = 'orange'
                    borderColor = 'brown'
                    primaryColor = 'red'
                    secondaryColor = 'purple'
                        break
                
                default:
                    cardColor = 'purple'
                    borderColor = 'blue'
                    primaryColor = 'green'
                    secondaryColor = 'yellow'
                    console.log(account, cardColor, borderColor, primaryColor, secondaryColor)
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
                <UserAccount />

                { Accounts }
            </AccountsList>
        )
    }
}

const UserAccount = styled(Account)`
    position: fixed;
    width: 293px;
`

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
