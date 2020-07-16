import React from 'react'
import { AiOutlineLogin, AiOutlineLogout, AiOutlineUser } from 'react-icons/ai'

export default [
  {
    path: '/login',
    name: 'Login',
    private: false,
    icon: <AiOutlineLogin />,
  },
  {
    path: '/account',
    name: 'My Account',
    private: true,
    icon: <AiOutlineUser />,
  },
  {
    path: '/',
    name: 'Logout',
    private: true,
    icon: <AiOutlineLogout />,
  }
]
