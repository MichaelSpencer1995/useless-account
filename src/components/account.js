import React, { Component } from 'react'
import styled from 'styled-components'

class Account extends Component {
    render() {
        let cardColor = this.props.cardColor
        let borderColor = this.props.borderColor
        let primaryColor = this.props.primaryColor
        let secondaryColor = this.props.secondaryColor
        
        let usersAccountWidth = '96.5%'
        
        if(this.props.usersAccount) {
            usersAccountWidth = '100%'
        }

        return (
            <SingleAccount style = {{ width: usersAccountWidth, background: cardColor, border: `${ borderColor } 1px solid`, borderRight: `${ borderColor } 4px solid`}}>
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
    height: 61px;
    margin: 0 auto;
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
