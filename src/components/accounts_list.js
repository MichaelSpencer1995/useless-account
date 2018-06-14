import React, { Component } from 'react'
import styled from 'styled-components'
import accountsHardData from './accounts_hard_data'

class AccountsListComponent extends Component {
    render() {
        console.log(this.props.users)
        const Accounts = this.props.users.map(account => (
            <Account>
                <h3>
                    {account.username}
                </h3>

                <p>
                    {account.motto || "Yolo"}
                </p>
            </Account>
        ))
        
        return (
            <AccountsList>
                <UserAccount>
                    <h3>
                        {this.props.loggedInUserCridentials.username}
                    </h3>

                    <p>
                        {this.props.loggedInUserCridentials.motto || "Yolo"}
                    </p>
                </UserAccount>

                { Accounts }
            </AccountsList>
        )
    }
}

const Account = styled.div`
    width: 290px;
    background: #ddd;
    margin: 0 auto;
    h3{
        color: #222;
    }
    p{
        color: #444;
    }
`

const UserAccount = styled(Account)`
    border: lightblue 3px solid;
    position: fixed;
    width: 284px;
`

const AccountsList = styled.div`
    margin-top: 40px;
    width: 300px;
    height: 250px;
    overflow: scroll;
    box-sizing: border-box;
    padding: 0.5em;
    border: #ccc 1px solid;
    border-radius: 10px;
`

export default AccountsListComponent
