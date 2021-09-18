import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { SeekerStyle } from './SeekerStyle'

const Seeker = () => {
  let history = useHistory()
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      history.push(`/items?search=${inputValue.trim()}`)
    }
  }

  return (
    <SeekerStyle>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          id="Seeker_input"
          placeholder="Nunca dejes de buscar"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          id="Seeker_submit"
          type="submit"
        >
          lupa
        </button>
      </form>
    </SeekerStyle>
  )
}

export default Seeker