import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'
import PatientCard from '../PatientCard/Index'

const Home = () => {
  const { states } = useContext(UserContext)
  const patient = states.patientFilter
  return (
    <ul>
      {patient && patient.map((p) => {
        return <PatientCard key={p.id} id={p.id} name={p.name} birthDate={p.birthDate} gender={p.gender} cpf={p.cpf} active={p.userActive} />
      })}
    </ul>
  )
}

export default Home
