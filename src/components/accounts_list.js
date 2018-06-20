import React, { Component } from 'react'
import styled from 'styled-components'
import Account from './account'
import switchColors from '../constants/switch-colors'

class AccountsListComponent extends Component {
    render() {
        const Accounts = this.props.users.map(account => {
            const currentUsersAccount = account.username === this.props.loggedInUserCridentials.username

            if(currentUsersAccount) {
                return
            }
            
            let cardColor, borderColor, primaryColor, secondaryColor
            let colorsToSwitch = [cardColor, borderColor, primaryColor, secondaryColor]

            switchColors(colorsToSwitch, account.theme)

            return (
                <Account
                    username = { account.username }
                    motto = { account.motto }
                    cardColor = { colorsToSwitch[0] } 
                    borderColor = { colorsToSwitch[1] }
                    primaryColor = { colorsToSwitch[2] }
                    secondaryColor = { colorsToSwitch[3] } />
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
