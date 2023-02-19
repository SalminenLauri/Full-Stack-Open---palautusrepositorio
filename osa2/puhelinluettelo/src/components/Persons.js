import Person from './Person'

const Persons = ({personsToShow}) => {
    return(
      <div>
        {personsToShow.map(person =>
            <Person person={person} key={person.name}/>
        )}
      </div>
    )
}

export default Persons