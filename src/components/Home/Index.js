import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'
import PatientCard from '../PatientCard/Index'
import * as S from './Styles'

const Home = () => {
  const { states } = useContext(UserContext)
  const patient = states.patientFilter
  return (
    <S.ListContainer>
      {patient && patient.map((p) => {
        return <PatientCard key={p.id} id={p.id} name={p.name} birthDate={p.birthDate} gender={p.gender} cpf={p.cpf} address={p.address} active={p.userActive} />
      })}
    </S.ListContainer>
  )
}

export default Home
