import React from 'react'
import PropTypes from 'prop-types'

const NavBar = (props) => {

    const routes = [
        { "id": 1, "title": "Home", "content": "Welcome to our homepage.", "path": "/" },
        { "id": 2, "title": "AboutUs", "content": "Learn more about our company.", "path": "/about" },
        { "id": 3, "title": "Services", "content": "Explore the services we offer.", "path": "/services" },
        { "id": 4, "title": "Contact", "content": "Get in touch with us.", "path": "/contact" },
        { "id": 5, "title": "Blog", "content": "Read our latest blog posts.", "path": "/blog" },
        { "id": 6, "title": "NotFound", "content": "404 Not Found.", "path": "*" }
    ];

    const { } = props

    return (
        <>
            {routes.map(route => <li>{route.title}</li>)}
        </>
    )
}

NavBar.propTypes = {

}

export default NavBar
