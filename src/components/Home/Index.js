import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'
import PatientCard from '../PatientCard/Index'

const Home = () => {
  const { states } = useContext(UserContext)
  // console.log(states)
  const patient = states.patient
  console.log(patient[1])
  return (
    <ul>
      {patient && patient.map((p) => {
        console.log(p)
        return <PatientCard name={p.name} birthDate={p.birthDate} gender={p.gender} cpf={p.cpf} active={p.userActive} />
      })}
    </ul> 
  )
}

export default Home
