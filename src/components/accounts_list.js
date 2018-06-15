import React, { Component } from 'react'
import styled from 'styled-components'
import Account from './account'

class AccountsListComponent extends Component {
    render() {
        const Accounts = this.props.users.map(account => {
            let cardColor, borderColor, primaryColor, secondaryColor

            switch(account.theme) {
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
    background: #f3ecb4;
    ::-webkit-scrollbar {
        width: 12px;
    }
    ::-webkit-scrollbar-track {
        background: white;
    }
    ::-webkit-scrollbar-thumb {
        background: #ddd;
        border: #ddd 1px solid;
        border-radius: 5px;
        position: relative;
    }
`

export default AccountsListComponent
