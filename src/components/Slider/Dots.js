import React from 'react'
import styled from 'styled-components'

const DotsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: 1rem 2rem;
  position: absolute;
  bottom: 0px;
`

const Dot = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 1rem;
  background-color: ${props => (props.isActiveDot ? '#F9B100' : 'white')};
  border: 2px solid ${(props) => props.theme.colors.secondaryColor};
`

const Dots = ({ imagePerPage, slidesLength, activeIndex, jumpToSlide }) => {
  const totalDots = slidesLength - imagePerPage + 1
  if (totalDots > 1) {
    return (
      <DotsWrapper>
        {Array.from({ length: totalDots }).map((el, i) => {
          let isActiveDot = activeIndex === i
          return (
            <Dot
              key={i}
              isActiveDot={isActiveDot}
              onClick={() => jumpToSlide(i)}
            />
          )
        })}
      </DotsWrapper>
    )
  } else {
    return null
  }
}

export default Dots
