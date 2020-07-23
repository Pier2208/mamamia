import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import SliderContent from './SliderContent'
import Slide from './Slide'
import Dots from './Dots'
import useInterval from '../../hooks/useInterval'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`

const Slider = ({ slides, sliderWidth, autoplay }) => {
  const [config, setConfig] = useState({
    activeIndex: 0,
    imageCount: 1,
    imagePerPage: 1,
    translate: 0,
    transition: 0.55,
  })

  const {
    activeIndex,
    imageCount,
    imagePerPage,
    translate,
    transition,
  } = config

  const nextSlide = () => {
    if (imageCount === slides.length) {
      return setConfig({
        ...config,
        activeIndex: 0,
        imageCount: imagePerPage,
        translate: 0,
      })
    }
    return setConfig({
      ...config,
      activeIndex: activeIndex + 1,
      imageCount: imageCount + 1,
      translate: (activeIndex + 1) * (sliderWidth / imagePerPage),
    })
  }

  const prevSlide = () => {
    if (activeIndex === 0) return
    setConfig({
      ...config,
      activeIndex: activeIndex - 1,
      imageCount: imageCount - 1,
      translate: (activeIndex - 1) * (sliderWidth / imagePerPage),
    })
    return setConfig({
      ...config,
      activeIndex: 0,
      imageCount: imagePerPage,
      translate: 0,
    })
  }

  const jumpToSlide = prevIndex => nextIndex => {
    return setConfig({
      ...config,
      activeIndex: nextIndex,
      imageCount: imageCount + (nextIndex - prevIndex),
      translate: nextIndex * (sliderWidth / imagePerPage),
    })
  }

  useEffect(() => {
    const handleKeyPress = event => {
      if (event.keyCode === 190 || event.keyCode === 39) {
        nextSlide()
      } else if (event.keyCode === 188 || event.keyCode === 37) {
        prevSlide()
      }
    }
    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [nextSlide, prevSlide])

  // autoplay feature
  useInterval(nextSlide, autoplay)

  return (
    <Wrapper>
      <SliderContent
        translate={translate}
        transition={transition}
        width={(sliderWidth / imagePerPage) * slides.length}
      >
        {slides.map((slide, i) => (
          <Slide key={i} image={slide} width={sliderWidth / imagePerPage} />
        ))}
      </SliderContent>
      <Dots
        imagePerPage={imagePerPage}
        slidesLength={slides.length}
        activeIndex={activeIndex}
        jumpToSlide={jumpToSlide(activeIndex)}
      />
    </Wrapper>
  )
}

export default Slider
