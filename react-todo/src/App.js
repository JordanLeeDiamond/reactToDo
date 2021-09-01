import { useState } from "react"
import InputDisplay from "./components/InputDisplay"
import TaskList from "./components/TaskList"

const App = () => {
  const [input, setInput] = useState("")
  const [tasks, setTasks] = useState([])
  return (
    <div>
      <h1>2du LySt</h1>
      <TaskList 
      tasks={tasks}
      setTasks={setTasks}
      />
      <InputDisplay 
        input={input} 
        setInput={setInput}
        tasks={tasks}
        setTasks={setTasks}
        />
    </div>
  )
}

export default App;