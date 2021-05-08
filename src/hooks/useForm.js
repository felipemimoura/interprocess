import { useState } from 'react'

const types = {
  cpf: {
    regex: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
    message: "Preencha um cpf válido"
  }
}

const useForm = (type) => {
  const [value, setValue] = useState()
  const [error, setError] = useState(null)



  function validateCPF(value) {
    if (type === false) return true
    if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false
    } else {
      setError(null)
      return true
    }
  }

  function onChange(e) {
    if (error) validateCPF(e.target.value)
    if (e.target.type === "checkbox") {
      setValue(e.target.checked)
    } else {
      setValue(e.target.value)
    }
  }
  return {
    value, setValue, error, onChange, onBlur: () => validateCPF(value)
  }
}

export default useForm