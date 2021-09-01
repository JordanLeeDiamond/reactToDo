const InputDisplay = (props) => {

    const addTaskHandler = () => {
        const newTasks = [...props.tasks]
        newTasks.push(props.input)
        props.setTasks(newTasks)
        props.setInput("")
    }

    return (
        <div>
            <input 
                value={props.input}
                type="text" 
                onChange={(event) => props.setInput(event.target.value)}
            />
        <button onClick={addTaskHandler}>add task</button>
        </div>
    )
}

export default InputDisplay;