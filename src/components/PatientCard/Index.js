import React from 'react'
import * as S from './Styles'

const PatientCard = ({ name, birthDate, gender, cpf, active }) => {
  return (
    <S.Patient>
      <h1>{name}</h1>
      <p>Data de Nascimento: {birthDate}</p>
      <p>Sexo: {gender}</p>
      <p>CPF: {cpf}</p>
      <p>Ativo: {active ? "Ativo" : "Inativo"}</p>

    </S.Patient>
  )
}

export default PatientCard
