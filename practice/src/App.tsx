import { useState } from 'react';
import './App.css';
import Fitness from './components/Fitness';
import Planets from './components/Planets';
import WorkouObject from './components/WorkouObject';
import Workoutarray from './components/Workoutarray';
import Counter from './components/Counter';
import Todolist from './components/todolist';

function App() {
  const age = 20;
  const isDone = true;
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("test")
  const [isShow, setIsShow] = useState(true);
  // const [textColor, setTextColor] = useState("")
  const exercises = [
    { exercise: "benchpress", reps: 15, sets: 10 },
    { exercise: "squats", reps: 10, sets: 3 },
    { exercise: "bicep curls", reps: 15, sets: 4 },
    { exercise: "leg press", reps: 15, sets: 5 }
  ];

  const workouts = [
    { workout: "Bench Press", reps: 12 },
    { workout: "Squats", reps: 10 },
    { workout: "Deadlifts", reps: 8 },
    { workout: "Bicep Curls", reps: 15 },
    { workout: "Leg Press", reps: 12 }
  ];

  const planets = [
    { planetName: "Mercury", isGasPlanet: false },
    { planetName: "Venus", isGasPlanet: false },
    { planetName: "Earth", isGasPlanet: false },
    { planetName: "Mars", isGasPlanet: false },
    { planetName: "Jupiter", isGasPlanet: true },
    { planetName: "Saturn", isGasPlanet: true },
    { planetName: "Uranus", isGasPlanet: true },
    { planetName: "Neptune", isGasPlanet: true }
  ];
  
  const increaseCount = () => {
    setCount(count +1);
  }

  const handleChangeInput = (event: any) => {
    setInput(event.target.value)
  }
  const handleShowText = () => { 
    setIsShow(!isShow)
   }
  
  return (
    <>
    <div>
      {age > 18 ? (
        <div>
          {exercises.map((workout, index) => (
            <Fitness 
              key={index} 
              excercise={workout.exercise} 
              reps={workout.reps} 
              sets={workout.sets} 
            />
          ))}
        </div>
      ) : (
        <div>
          <h1 style={{ color: isDone ? 'green' : 'blue' }}>Done</h1>
          {isDone && <button>Submit</button>}
        </div>
      )}
      </div>
      <Workoutarray />

      {workouts.map((workout) => {
        return <WorkouObject workout = {workout.workout} reps={workout.reps}  />
      })}
      {planets.map((planet) =>{
        return <Planets planetName={planet.planetName} isGasPlanet={planet.isGasPlanet}/>
      })}
    <button onClick={increaseCount}>{count}</button>
    <input type='text' placeholder='enter text' onChange={handleChangeInput} />
    {input}
    <button onClick={handleShowText}>Show / Hide</button>
   { isShow && <h1>Text can be seen!</h1>}
   <hr></hr>
   <Counter/>
   <Todolist />
    </>
    
  );
}

export default App;
