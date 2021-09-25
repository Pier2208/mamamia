const authLinks = [
  {
    path: '/login',
    name: 'Login',
    private: false,
  },
  {
    path: '/account',
    name: 'Account',
    private: true,
  },
  {
    path: '/cart',
    name: 'Cart',
    private: true,
  },
  {
    path: '/',
    name: 'Logout',
    private: true,
  },
]

export default authLinks
