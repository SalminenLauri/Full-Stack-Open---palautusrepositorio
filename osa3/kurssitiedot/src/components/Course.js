const Header = (props) => {
  return <h2>{props.course}</h2>
}

const Total = ({parts}) => {
  const total = 
    parts.reduce((sum, part) => sum + part.exercises, 0)
  return <p><b>Number of exercises: {total}</b></p>
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}


const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part =>
        <Part key={part.id} part={part}/>
      )}
    </div>
  )
}

export default Course
