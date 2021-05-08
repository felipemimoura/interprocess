import React from 'react'
import * as S from './Styles'

const Input = ({ label, type, name, placeholder, value, onChange, onBlur, checked }) => {
  return (
    <>
      <S.Label htmlFor={name}>
        {label}
      </S.Label>
      <input type={type} id={name} name={name} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur} checked={checked} />
    </>
  )
}

export default Input
