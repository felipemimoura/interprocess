import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { goTo } from '../../Routes/Coordinator'
import { UserContext } from '../../UserContext'
import * as S from './Styles'

const Header = () => {
  const { states, setters } = useContext(UserContext)
  const paciente = [...states.patient]
  const [searchInput, setSearchInput] = useState("")
  const history = useHistory()


  const handleChange = ({ target }) => {
    setSearchInput(target.value)
  }

  useEffect(() => {
    const result = paciente.filter(p => p.name.toLowerCase().includes(searchInput))
    setters.setPatientFilter(result)
  }, [searchInput])



  const goToHome = () => {
    goTo(history, "/", "")
  }
  const handleClick = () => {
    goTo(history, "/cadastro", "")
  }
  return (
    <S.Header>
      <h2 onClick={goToHome}>ACME</h2>
      <input type="text" placeholder="Buscar Paciente" onChange={handleChange} />
      <button onClick={handleClick}>Cadastrar Paciente</button>
    </S.Header>
  )
}

export default Header
