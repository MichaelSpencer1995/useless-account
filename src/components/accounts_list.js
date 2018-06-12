import React, { Component } from 'react'
import styled from 'styled-components'
import accountsHardData from './accounts_hard_data'

class AccountsListComponent extends Component {
    render() {
        const Accounts = accountsHardData.map(account => (
            <Account>
                <h3>
                    {account.username}
                </h3>

                <p>
                    {account.motto}
                </p>
            </Account>
        ))
        
        return (
            <AccountsList>
                { Accounts }
            </AccountsList>
        )
    }
}

const Account = styled.div``
const AccountsList = styled.div`
    margin-top: 40px;
`

export default AccountsListComponent
