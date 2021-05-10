import React from 'react'
import * as S from './Styles'

const Input = ({ label, type, name, placeholder, value, onChange, onBlur, checked , required}) => {
  return (
    <>
      <S.Label htmlFor={name}>
        {label}
      </S.Label>
      <S.Input type={type} id={name} name={name} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur} checked={checked} required={required} />
    </>
  )
}

export default Input
