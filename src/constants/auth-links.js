const authLinks = [
  {
    name: 'Login',
    private: false,
    type: 'button'
  },
  {
    path: '/account',
    name: 'Account',
    private: true,
    type: 'link'
  },
  {
    path: '/cart',
    name: 'Cart',
    private: true,
    type: 'link'
  },
  {
    name: 'Logout',
    private: true,
    type: 'button'
  },
]

export default authLinks
