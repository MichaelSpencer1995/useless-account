import React, { Component } from 'react'
import styled from 'styled-components'

let cardColor, borderColor, primaryColor, secondaryColor, usersAccount, width

class Account extends Component {
    render() {
        cardColor = this.props.cardColor
        borderColor = this.props.borderColor
        primaryColor = this.props.primaryColor
        secondaryColor = this.props.secondaryColor
        usersAccount = this.props.usersAccount
        width = this.props.width

        return (
            <SingleAccount style = {{ position: usersAccount, background: cardColor, borderRight: `${ borderColor } 8px solid`, width: width}}>
                    <UsernameMottoContainer>
                        <h3 style = {{ color: primaryColor }}>
                            {this.props.username}
                        </h3>

                        <p style = {{ color: secondaryColor }}>
                            {this.props.motto || "Yolo"}
                        </p>
                    </UsernameMottoContainer>

                    <DeleteAccount>Delete Account</DeleteAccount>
            </SingleAccount>
        )
    }
}

const SingleAccount = styled.div`
    width: 280px;
    width: 100%;
    height: 61px;
    margin-bottom: 10px;
    border: white 2px solid;
    box-sizing: border-box;
    padding: 0 1em;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        font-weight: 500;
        font-style: italic;
        font-size: 14px;
    }
` 

const UsernameMottoContainer = styled.div`
    // height: 30px;
`

const DeleteAccount = styled.button`
    height: 25px;
    width: 80px;
    font-size: 8px;
    margin: 0;
    background: linear-gradient(-180deg,#03A9F4 0,#3F51B5 100%);
    border: none;
    &:hover{
        background: #0074a9;
    }
`

export default Account
