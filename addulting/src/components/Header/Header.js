import React from 'react'

const Header = props => {
    let Greeting
    if(props.user === null) {
        Greeting = <p> Welcome </p>
    } else if (props.user.firstName) {
        Greeting = (
            <p>
                Hello {props.user.firstName}
            </p>
        )
    } else if (props.user.local.username) {
        Greeting = (
            <p>
            Welcome back {props.user.local.username}
            </p>
        )
    }
    return (
        <div className="Header">
        {Greeting}
        </div>
    )
}

export default Header