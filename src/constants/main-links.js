import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

export default [
    {
        path: '/',
        name: 'Home',
        private: false
    },
    {
        path: '/menu',
        name: 'Menu',
        private: false
    },
    {
        path: '/contact',
        name: 'Contact',
        private: false
    },
    {
        path: '/account',
        name: 'My Account',
        private: true,
        icon: <FaUserCircle />
    }
]