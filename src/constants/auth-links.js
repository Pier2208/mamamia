import React from 'react'
import {
  AiOutlineLogin,
  AiOutlineLogout,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from 'react-icons/ai'

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
    path: '/cart',
    name: 'My Cart',
    private: true,
    icon: <AiOutlineShoppingCart />,
  },
  {
    path: '/',
    name: 'Logout',
    private: true,
    icon: <AiOutlineLogout />,
  },
]
