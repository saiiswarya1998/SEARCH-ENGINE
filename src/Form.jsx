import React from 'react'
import { useGlobalContext } from './Context'

const Form = () => {
  const { setSearchTerm } = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.search.value
    if (!searchValue) {
      return
    }
    setSearchTerm(searchValue)
  }
  return (
    <section>
      <h1 className='title'>Image Search</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-input search-input'
          name='search'
          placeholder='cat'
        ></input>
        <button type='submit' className='btn'>
          Search
        </button>
      </form>
    </section>
  )
}

export default Form
