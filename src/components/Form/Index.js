import React from 'react'
import Input from '../Inputs/Index'

const Form = () => {
  return (
    <form>
      <h1>Cadastro</h1>
      <Input label="Nome Completo" type="text" name="fullName" />
      <Input label="Data de Nascimento" type="date" name="birthdate" />
      <Input label="CPF" type="text" name="cpf" placeholder="xxx.xxx.xxx-xx" required />
      <Input label="Usuário Ativo" type="checkbox"  required />
    </form>
  )
}

export default Form
