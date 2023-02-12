import { useState } from 'react'


const Button =({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Header = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

const MostVotes = ({anecdotes,votes}) => {
  const max = Math.max(...votes)
  const maxIndex = votes.indexOf(max)
  const mostVoted = anecdotes[maxIndex]

  if (max === 0) {
    return (
      <p>No votes yet</p>
    )
  }

  return (
    <div>
      <p>{mostVoted}</p>
    </div> 
  ) 
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(8).fill(0))

  
  const handleNext = () => {
    const rand = Math.floor(anecdotes.length*Math.random());
    console.log(rand)
    setSelected(rand)
  }

  const handleVote = () => {
    const copy = [...votes]
    copy[selected]+=1
    setVotes(copy)
  }
  

  return (
    <div>
      <Header text="Anecdote of the day"/>
      {anecdotes[selected]}
      <div>has {votes[selected]} votes</div>
      <Button handleClick={handleVote} text='vote'/>
      <Button handleClick={handleNext} text='next anecdote'/>
      <Header text="Anecdote of the day"/>
      <MostVotes anecdotes={anecdotes} votes={votes}/>
    </div>
  )
}

export default App
