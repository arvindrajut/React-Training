import { useState } from "react"

function Todolist() {
    const [todolist, setTodo] = useState<string[]>([]);
    const [input, setInput] = useState("");
    const [isComplete, setCompleted] = useState({value: "", status: false})
  return (
    <div>
        <div>
            <input value={input} onChange={(event) => setInput(event.target.value)} />
            <button onClick={() => setTodo([...todolist,input])}>Add todolist</button>
        </div>
        <div>
        {todolist.map((todo) => {
            return <div>
               <div style={{color: isComplete.value ===todo && isComplete.status ? "green" : "blue"}}> {todo} </div>
                <button onClick={() => setCompleted({value: input, status: true})}>Complete</button>
                <button >Delete</button>
                </div>
        })}
        </div>
    </div>
    
  )
}

export default Todolist