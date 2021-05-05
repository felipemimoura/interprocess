import { createContext, useEffect, useState } from "react";

export const UserContext = createContext()

export const UserStorage = ({ children }) => {
  const [data, setData] = useState()

  useEffect(() => {
    const patient = JSON.parse(window.localStorage.getItem("patient"))
    console.log(patient)
    setData(patient)
  }, [])

  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  )

}