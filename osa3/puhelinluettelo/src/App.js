import { useState } from 'react'

const Person = ({person}) => {
  return (<p>{person.name}</p>)
}



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas'}
  ]) 
  const [newName, setNewName] = useState('')



  const addPerson = (event) => {
    event.preventDefault()
    console.log('Added', event.target)
    const contactObject = {
      name: newName
    }

    if(persons.some(person => person.name === contactObject.name)){
      console.log("Sisältää jo nimen")
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(contactObject))
      setNewName('')
    }
  }


  const handleContactChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name:<input value={newName}
            onChange={handleContactChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person =>
          <Person person={person} key={person.name}/>
        )}
      </div>
    </div>
  )

}
export default App
