import React from 'react'
import PropTypes from 'prop-types'

function Link({ route }) {
    return (
        <>
            <li className='mr-10 px-6 hover:bg-yellow-500'>
                <a href={route.path}>{route.title}</a>
            </li>
        </>
    )
}

Link.propTypes = {
    route: PropTypes.object.isRequired
}

export default Link
