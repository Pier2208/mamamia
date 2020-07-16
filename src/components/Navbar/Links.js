import styled from 'styled-components'
import PropTypes from 'prop-types'

const Links = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 2rem;

  @media (max-width: 970px) {
    width: 100%;
    margin: 0;
    flex-direction: ${props => props.mcol ? 'column' : 'row'}
  }

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    padding: 0.7rem;
    & svg {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    @media (max-width: 970px) {
      color: #fff;
      font-size: 3rem;
      opacity: 0;
      transform: ${props => props.fromRight ? `translateX(500%)` : `translateY(500%)`};
    }
  }
`

Links.propTypes = {
  mcol: PropTypes.bool, // stack the menu vertically in mobile view (default row)
  fromRight: PropTypes.bool // the animated menu items are entering the screen from the right (default: from bottom)
};

export default Links
