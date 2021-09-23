import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { SeekerStyle } from './SeekerStyle'

/**
* Renders a Search Input
* 
* Call to items search only if is have a value
*/
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
      <form 
        className="seeker"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          data-testid="Seeker_input"
          className="seeker__input"
          placeholder="Nunca dejes de buscar"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          data-testid="Seeker_submit"
          className="seeker__submit"
          type="submit"
        >
          <AiOutlineSearch size={16} />
        </button>
      </form>
    </SeekerStyle>
  )
}

export default Seeker