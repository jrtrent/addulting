import React from 'react'

const Home = props => {
    if (props.user) {
        return (
            <div className="Home">
                <p>Current User:</p>
                <code>
                    {JSON.stringify(props)}
                </props>
            </div>
        )
    } else {
        return (
            <div className="Home">
            <code>
                {JSON.stringify(props)}
            </code>
        </div>
        )
    }
}

export default Home