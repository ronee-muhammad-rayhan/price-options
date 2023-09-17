import React from 'react'

function Link({ route }) {
    return (
        <>
            <li>
                <a href={route.path}>{route.title}</a>
            </li>
        </>
    )
}

export default Link
