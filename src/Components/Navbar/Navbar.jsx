import React, { useState } from 'react';
import Link from '../Link/Link';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', path: '/', },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Profile', path: '/profile/:id' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Services', path: '/services' }
    ];
    return (
        <nav className='bg-yellow-200 p-6'>
            <div className='md:hidden text-2xl'
                onClick={() => { setOpen(!open) }}>
                {open === true ?
                    <AiOutlineMenu></AiOutlineMenu>
                    : <AiOutlineClose></AiOutlineClose>
                }
            </div>
            <ul className={`md:flex duration:1000 absolute md:static bg-yellow-200 px-6 ${open ? 'top-16' : 'hidden'}`}>
                {
                    routes.map(route =>
                        <Link key={route.id} route={route}></Link>)
                }

            </ul>

        </nav>
    );
};

export default Navbar;