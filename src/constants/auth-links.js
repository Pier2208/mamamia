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
    name: 'Cart',
    private: true,
    type: 'button'
  },
  {
    name: 'Logout',
    private: true,
    type: 'button'
  },
]

export default authLinks
