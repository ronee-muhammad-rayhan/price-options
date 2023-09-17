import React from 'react'
import PropTypes from 'prop-types'

function Link({ route }) {
    return (
        <>
            <li>
                <a href={route.path}>{route.title}</a>
            </li>
        </>
    )
}

Link.propTypes = {
    route: PropTypes.object.isRequired
}

export default Link
