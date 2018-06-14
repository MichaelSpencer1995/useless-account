import React, { Component } from 'react'
import styled from 'styled-components'

let cardColor, borderColor, primaryColor, secondaryColor, usersAccount

class Account extends Component {
    render() {
        cardColor = this.props.cardColor
        borderColor = this.props.borderColor
        primaryColor = this.props.primaryColor
        secondaryColor = this.props.secondaryColor
        usersAccount = this.props.usersAccount
        
        return (
            <SingleAccount style = {{ position: usersAccount, background: cardColor, borderRight: `${ borderColor } 8px solid` }}>
                    <h3 style = {{ color: primaryColor }}>
                        {this.props.username}
                    </h3>

                    <p style = {{ color: secondaryColor }}>
                        {this.props.motto || "Yolo"}
                    </p>
            </SingleAccount>
        )
    }
}

const SingleAccount = styled.div`
    width: 280px;
    height: 61px;
    margin-top: 10px;
    padding: 2em;
    box-sizing: border-box;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p{
        font-weight: 500;
        font-style: italic;
        font-size: 14px;
    }
` 


export default Account
