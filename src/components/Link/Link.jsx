import React from 'react'

function Link({ route }) {
    return (
        <>
            <a className='ml-6' href={route.path}>{route.title}</a>
        </>
    )
}

export default Link
