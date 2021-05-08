import React, { useContext } from 'react'
import Input from '../Inputs/Index'
import Button from '../Button/Index'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { goTo } from '../../Routes/Coordinator'
import { UserContext } from '../../UserContext'
import * as S from './Styles'

const Form = ({ title }) => {
  const { states, setters } = useContext(UserContext)
  const pacientes = [...states.patient]
  const history = useHistory()
  const name = useForm()
  const birthdate = useForm()
  const cpf = useForm("cpf")
  const userActive = useForm()
  const gender = useForm()

  const handleSubmit = (event) => {
    event.preventDefault()
    const addPatient = {
      id: pacientes.length,
      name: name.value,
      birthDate: birthdate.value,
      cpf: cpf.value,
      gender: gender.value,
      userActive: userActive.value
    }
    pacientes.push(addPatient)
    window.localStorage.setItem('patient', JSON.stringify(pacientes))
    setters.setPatient(pacientes)
    setters.setPatientFilter(pacientes)
    goTo(history, "/", "")
  }
  return (
    <S.Form onSubmit={handleSubmit}>
      <h1>{title}</h1>
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
    </S.Form>
  )
}

export default Form
