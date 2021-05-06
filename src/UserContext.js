import { createContext, useEffect, useState } from "react";

export const UserContext = createContext()

export const UserStorage = ({ children }) => {
  const [patient, setPatient] = useState([])
  const [patientFilter, setPatientFilter] = useState([])
  console.log(patientFilter)

  useEffect(() => {
    const patient = JSON.parse(localStorage.getItem("patient"))


    if (patient) {
      setPatient(patient)
      setPatientFilter(patient)
    } else {
      setPatient([])
      setPatientFilter([])
    }
  }, [])

  const states = {
    patient,
    patientFilter
  }

  const setters = {
    setPatient,
    setPatientFilter
  }

  const data = { states, setters }

  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  )

}