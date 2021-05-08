import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import useForm from '../../hooks/useForm'
import { UserContext } from '../../UserContext'
import Form from '../Form/Index'
import { Select } from '../Form/Styles'
import Input from '../Inputs/Index'

const Edit = () => {
  const { states, setters } = useContext(UserContext)
  const { id } = useParams()
  const [patient, setPatient] = useState({})
  const name = useForm()


  useEffect(() => {
    const pacientes = [...states.patient]
    setPatient(pacientes[id])
  }, [])

  return (
    <Form>
      <Input label="Nome Completo" type="text" name="fullName" value={patient.name} />
      <Input label="Data de Nascimento" type="date" name="birthdate" value={patient.birthDate} />
      <Input label="CPF" type="text" name="cpf" placeholder="xxx.xxx.xxx-xx" value={patient.cpf} />
      <Select >
        <option value="" selected disabled hidden>Escolha o sexo do paciente</option>
        <option value="male" >
          Masculino
      </option>
        <option value="female">
          Feminino
      </option>
      </Select>
      <Input label="Usuário Ativo" type="checkbox" value={patient.userActive} />

    </Form>
  )
}

export default Edit
