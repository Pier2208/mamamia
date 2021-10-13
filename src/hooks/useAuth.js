import { useSelector } from 'react-redux'

const useAuth = () => {
  const { isAuthenticated } = useSelector(state => state.user)
  return isAuthenticated
}

export default useAuth
