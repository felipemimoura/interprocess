import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { UserContext } from '../../UserContext'
import Form from '../Form/Index'
import { Select } from '../Form/Styles'
import Input from '../Inputs/Index'

const Edit = () => {
  const { states, setters } = useContext(UserContext)
  const { id } = useParams()
  const pacientes = [...states.patient]
  const [editPatient, setEditPatient] = useState({})
  
  useEffect(() => {
    setEditPatient(pacientes[id])
  }, [editPatient])

  return (
    <Form title="Editar Paciente" button="Salvar" patient={editPatient}>
    </Form>
  )
}

export default Edit
