
const workouts = ["squats", "curls", "leg press", "bench","incline press", "tricep pushdowns"];
function Workoutarray() {
  return (
    <div>
        {workouts.map((workout) => {
            return <div>{workout}</div>
        })}
    </div>
  )
}

export default Workoutarray