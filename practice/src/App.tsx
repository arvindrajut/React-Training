import './App.css';
import Fitness from './components/Fitness';

function App() {
  const age = 20;
  const isDone = true;

  const exercises = [
    { exercise: "benchpress", reps: 15, sets: 10 },
    { exercise: "squats", reps: 10, sets: 3 },
    { exercise: "bicep curls", reps: 15, sets: 4 },
    { exercise: "leg press", reps: 15, sets: 5 }
  ];

  return (
    <>
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
    </>
  );
}

export default App;
