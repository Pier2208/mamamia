import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { RiArrowGoBackLine } from 'react-icons/ri'
import {
  AiTwotoneCheckCircle,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from 'react-icons/ai'
import { SizeSelector, Selection } from './SizeSelector'
import CustomButton from '../ui/Buttons/CustomButton'
import IconButton from '../ui/Buttons/IconButton'

const Grid = styled.div`
  display: grid;
  grid-column: col-start 5 / full-end;
  justify-content: center;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 8rem;
  justify-content: space-around;
`
const Header = styled.div`
  width: 100%;
`
const Body = styled.div`
  width: 100%;
`
const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`
const Title = styled.h1`
  font-size: 3rem;
`

const SpecialFeatures = styled.div`
  display: flex;
  padding: 1.5rem 0;
`
const SpecialFeature = styled.div`
  display: flex;
  align-items: center;
  margin-right: 4rem;
  & svg {
    color: green;
    margin-right: 0.7rem;
  }
`

const Description = styled.p`
  margin: 1.5rem 0 3rem 0;
`

const Ingredients = styled.div`
  display: flex;
  margin: 3rem 0;
`

const Size = styled.div`
  display: flex;
  align-items: center;
`

const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin: 3rem 0;
`

const Input = styled.input.attrs({
  type: 'number',
  min: '1',
})`
  width: 3rem;
  height: 3rem;
  margin: 0 1.6rem;
  font-size: 1.7rem;
  text-align: center;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const PriceTag = styled.div`
  width: 5.5rem;
  height: 5.5rem;
  background-color: ${props => props.theme.colors.primaryColor};
  color: white;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-left: auto;
  user-select: none;
`

const DishDetail = ({ dish }) => {
  const [activeSize, setActiveSize] = useState(dish.size[1] || dish.size[0])
  const [quantity, setQuantity] = useState(1)
  const [total, setTotal] = useState(activeSize.price)
  console.log(total)
  console.log(activeSize)

  return (
    <Grid>
      <Column>
        <Header>
          <Link to={`/menu/${dish.category.name}`}>
            <RiArrowGoBackLine /> Back to menu
          </Link>
        </Header>
        <Body>
          <Title>{dish.name}</Title>
          <SpecialFeatures>
            {dish.vegan && (
              <SpecialFeature>
                <AiTwotoneCheckCircle /> <span>Vegan</span>
              </SpecialFeature>
            )}
            {dish.glutenFree && (
              <SpecialFeature>
                <AiTwotoneCheckCircle /> <span>Gluten Free</span>
              </SpecialFeature>
            )}
          </SpecialFeatures>
          <Description>{dish.description}</Description>
          <Ingredients>Ingredients: {dish.ingredient.join(', ')}</Ingredients>
          <Size>
            <span>Select size: </span>
            <SizeSelector>
              {dish.size &&
                dish.size.map(el => {
                  return (
                    <Selection
                      key={el.size}
                      active={el.size === activeSize.size}
                      onClick={() => {
                        setActiveSize({ ...el })
                      }}
                    >
                      {el.size}
                    </Selection>
                  )
                })}
            </SizeSelector>
          </Size>
          <Quantity>
            <IconButton
              ariaLabel="Add one item to cart"
              width="3rem"
              height="3rem"
              onClick={() => {
                if (quantity === 1) return
                setQuantity(prevQty => prevQty - 1)
                setTotal(activeSize.price * quantity)
              }}
            >
              <AiOutlineMinusCircle />
            </IconButton>
            <Input
              value={quantity}
              onChange={e => {
                setQuantity(Math.abs(e.target.value))
                setTotal(activeSize.price * quantity)
              }}
            />
            <IconButton
              ariaLabel="Remove one item to cart"
              width="3rem"
              height="3rem"
              onClick={() => {
                setQuantity(prevQty => prevQty + 1)
                setTotal(activeSize.price * quantity)
              }}
            >
              <AiOutlinePlusCircle />
            </IconButton>
          </Quantity>
        </Body>
        <Footer>
          <CustomButton type="button" active uppercase width="50%">
            Add to Cart
          </CustomButton>
          <PriceTag>${activeSize.price * quantity}</PriceTag>
        </Footer>
      </Column>
    </Grid>
  )
}

export default DishDetail
