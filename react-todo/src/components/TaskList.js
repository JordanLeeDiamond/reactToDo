const TaskList = ({ tasks, setTasks }) => {

    const deleteHandler = (index) => {
        const newTasks = [...tasks]
        newTasks.splice(index, 1)
        setTasks(newTasks)
    }

    return (
        <div>
            {tasks.map((task, index) => {
                return (
                    <>
                        <p>{task}</p>
                        <button onClick={() => deleteHandler(index)}>delete</button>
                    </>
                )
            })}
        </div>
    )
}

export default TaskList;