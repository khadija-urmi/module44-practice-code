import React from 'react';
import Link from '../Link/Link';

const Navbar = () => {
    const routes = [
        { id: 1, name: 'Home', path: '/', },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Profile', path: '/profile/:id' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Services', path: '/services' }
    ];
    return (
        <nav>
            <ul className='flex '>
                {
                    routes.map(route =>
                        <Link key={route.id} route={route}></Link>)
                }

            </ul>

        </nav>
    );
};

export default Navbar;