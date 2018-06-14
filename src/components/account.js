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
            <SingleAccount style = {{ position: usersAccount, background: cardColor, borderRight: `${ borderColor } 3px solid` }}>
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
    width: 290px;
    height: 53px;
    margin-top: 10px;
    padding: 1em;
    box-sizing: border-box;
    border-radius: 3px;
    background: ${ cardColor };
    border-right: ${ borderColor } 3px solid;
    position: ${({ usersAccount }) => usersAccount ? "fixed" : "initial" };
    
    h3{
        color: ${ primaryColor };
    }
    p{
        color: ${ secondaryColor };
        font-weight: 500;
        font-size: 16px;
    }
` 


export default Account
