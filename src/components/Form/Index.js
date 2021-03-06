import React, { useContext } from 'react'
import Input from '../Inputs/Index'
import Button from '../Button/Index'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { goTo } from '../../Routes/Coordinator'
import { UserContext } from '../../UserContext'
import * as S from './Styles'


const Form = ({ title, button, patient }) => {
  const { states, setters } = useContext(UserContext)
  const pacientes = [...states.patient]
  const history = useHistory()
  const name = useForm()
  const birthdate = useForm()
  const cpf = useForm("cpf")
  const userActive = useForm()
  const gender = useForm()
  const address = useForm()
 

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

  if (patient) {
    return (
      <S.Form onSubmit={handleSubmit}>
        <h1>{title}</h1>
        <Input label="Nome Completo" type="text" name="fullName" required value={patient.name}  />
        <Input label="Data de Nascimento" type="date" name="birthdate" required value={patient.birthDate} />
        <Input label="CPF" type="text" name="cpf" placeholder="xxx.xxx.xxx-xx" required value={patient.cpf} />
        <Input label="Endereço" type="text" name="endereco" value={patient.cpf} />
        <S.Label>
          <span>Sexo: </span>
          <S.Select {...gender}>
            <option value="" selected disabled hidden>Escolha o sexo do paciente</option>
            <option value="male" >
              Masculino
            </option>
            <option value="female">
              Feminino
            </option>
          </S.Select>
          <Input required label="Usuário Ativo" type="checkbox" />
        </S.Label>

        <Button>
          {button}
        </Button>
      </S.Form>
    )
  } else {
    return (
      <S.Form onSubmit={handleSubmit}>
        <h1>{title}</h1>
        <Input label="Nome Completo" type="text" name="fullName" required {...name} />
        <Input label="Data de Nascimento" type="date" name="birthdate" required {...birthdate} />
        <Input label="CPF" type="text" name="cpf" placeholder="xxx.xxx.xxx-xx" required {...cpf} />
        <Input label="Endereço" type="text" name="endereco"  {...address}  />
        <S.Label>
          <span>Sexo: </span>
          <S.Select {...gender}>
            <option value="" selected disabled hidden>Escolha o sexo do paciente</option>
            <option value="male" >
              Masculino
            </option>
            <option value="female">
              Feminino
            </option>
          </S.Select>
          <Input required label="Usuário Ativo" type="checkbox" {...userActive} />
        </S.Label>

        <Button>
          {button}
        </Button>
      </S.Form>
    )
  }


}

export default Form
