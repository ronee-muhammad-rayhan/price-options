import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from '../Link/Link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NavBar = (props) => {

    const [open, setOpen] = useState(false)

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
        <nav className='text-black p-6 bg-yellow-200'>
            <div className='md:hidden text-3xl' onClick={() => setOpen(!open)}>
                {
                    open !== true ? <AiOutlineMenu></AiOutlineMenu> : <AiOutlineClose></AiOutlineClose>
                }

            </div>
            <ul className={`flex flex-col md:flex-row justify-center items-center gap-10 absolute
            ${open ? '' : 'hidden'}
            bg-yellow-200 px-6 shadow-lg`} >
                {routes.map(route => <Link key={route.id} route={route}></Link>)}
            </ul>
        </nav>
    )
}

NavBar.propTypes = {
    props: PropTypes.array
}

export default NavBar
