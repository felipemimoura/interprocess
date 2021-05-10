import React from 'react'
import { useHistory } from 'react-router'
import { goTo } from '../../Routes/Coordinator'
import * as S from './Styles'

const PatientCard = ({ id, name, birthDate, gender, cpf, active, address }) => {
  const history = useHistory()
  const handleClick = (id) => {
    goTo(history, "/edit/", `${id}`)

  }
  return (
    <S.Patient>
      <h1>{name}</h1>
      <p>Data de Nascimento: {birthDate}</p>
      <p>Sexo: {gender}</p>
      <p>CPF: {cpf}</p>
      <p>Endereço: {address}</p>
      <p>Ativo: {active ? "Ativo" : "Inativo"}</p>
      <button onClick={() => handleClick(id)}>editar</button>

    </S.Patient>
  )
}

export default PatientCard
