import React from 'react'

const Input = ({ label, type, name, placeholder, value, onChange, onBlur, checked }) => {
  return (
    <>
      <label htmlFor={name}>
        {label}
      </label>
      <input type={type} id={name} name={name} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur} checked={checked} />
    </>
  )
}

export default Input
