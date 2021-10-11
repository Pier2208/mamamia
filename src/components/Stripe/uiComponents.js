import styled, {keyframes} from 'styled-components'

const voidAnimationOut = keyframes`
from {
  opacity: 0
}
to {
  opacity: 1
}
`

export const FormRow = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
  border-bottom: 1px solid var(--color-grey-medium);
  padding: var(--spacing-s);
`

export const Fieldset = styled.fieldset`
  margin: 0 15px 20px;
  padding: 0;
  border-style: none;
  background-color: var(--color-white);
  will-change: opacity, transform;
`

export const Label = styled.label`
  width: 25%;
  min-width: 130px;
  padding: 11px 0;
  color: #504e4e;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Input = styled.input`
  font-size: 16px;
  width: 100%;
  padding: var(--spacing-s);
  color: var(--color-grey-dark);
  background-color: var(--color-grey-medium);
  animation: ${voidAnimationOut} 1ms;
  border: none;
  outline: none;

  &::placeholder {
    color: #d8d8d8;
  }

  &:-webkit-autofill {
    -webkit-text-fill-color: var(--color-grey-dark);
    /* Hack to hide the default webkit autofill */
    transition: background-color 100000000s;
    animation: ${voidAnimationOut} 1ms;
  }
`
