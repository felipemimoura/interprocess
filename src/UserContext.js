import { createContext, useEffect, useState } from "react";

export const UserContext = createContext()

export const UserStorage = ({ children }) => {
  const [patient, setPatient] = useState([])

  useEffect(() => {
    const patient = JSON.parse(localStorage.getItem("patient"))
    setPatient(patient)
  }, [])

  const states = {
    patient
  }

  const setters = {
    setPatient
  }

  const data = { states, setters }

  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  )

}