import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { UserContext } from '../../UserContext'
import Form from '../Form/Index'


const Edit = () => {
  const { states } = useContext(UserContext)
  const { id } = useParams()
  const pacientes = [...states.patient]
  const [editPatient, setEditPatient] = useState({})

  useEffect(() => {
    setEditPatient(pacientes[id])
  }, [editPatient, setEditPatient, id])

  return (
    <Form title="Editar Paciente" button="Salvar" patient={editPatient}>
    </Form>
  )
}

export default Edit
