import React, { Component } from 'react'
import styled from 'styled-components'

class Account extends Component {
    render() {
        let cardColor = this.props.cardColor
        let borderColor = this.props.borderColor
        let primaryColor = this.props.primaryColor
        let secondaryColor = this.props.secondaryColor
        let usersAccount = this.props.usersAccount

        return (
            <SingleAccount style = {{ position: usersAccount, background: cardColor, borderRight: `${ borderColor } 8px solid`}}>
                <UsernameMottoContainer>
                    <h3 style = {{ color: primaryColor }}>
                        {this.props.username}
                    </h3>

                    <p style = {{ color: secondaryColor }}>
                        {this.props.motto || "Yolo"}
                    </p>
                </UsernameMottoContainer>
            </SingleAccount>
        )
    }
}

const SingleAccount = styled.div`
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
    h3 {
        padding: 0 !important;
        margin: 0 !important;
    }
    p {
        font-weight: 500;
        font-style: italic;
        font-size: 14px;
        padding: 0 !important;
        margin: 0 !important;
    }
` 

const UsernameMottoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export default Account
