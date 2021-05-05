import React from 'react'
import Input from '../Inputs/Index'
import Button from '../Button/Index'
import useForm from '../../hooks/useForm'


const Form = () => {
  const name = useForm()
  const birthdate = useForm()
  const cpf = useForm("cpf")
  const userActive = useForm()
  const gender = useForm()

  const handleSubmit = (event) => {
    event.preventDefault()
    const addPatient = {
      name: name.value,
      birthDate: birthdate.value,
      cpf: cpf.value,
      gender: gender.value,
      userActive: userActive.value
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Cadastro</h1>
      <Input label="Nome Completo" type="text" name="fullName" {...name} />
      <Input label="Data de Nascimento" type="date" name="birthdate"{...birthdate} />
      <Input label="CPF" type="text" name="cpf" placeholder="xxx.xxx.xxx-xx" {...cpf} />
      <select {...gender}>
        <option value="" selected disabled hidden>Escolha o sexo do paciente</option>
        <option value="male" >
          Masculino
      </option>
        <option value="female">
          Feminino
      </option>
      </select>
      <Input label="Usuário Ativo" type="checkbox" {...userActive} />

      <Button>
        Cadastrar
      </Button>
    </form>
  )
}

export default Form
