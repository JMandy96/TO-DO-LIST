import { FormEvent, useState } from "react";
interface ITask{
    title:string;
}
const List = () => {
    const [task, setTask] = useState<ITask>({ title: ""})
    const [tasks, setTasks] = useState<string[]>([]);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        if (task.title.trim() !== "") {
            setTasks([...tasks, task.title]);
            setTask({title:""})
        }
    };

    const handleRemove = (indexToRemove: number) => {
        const updatedTasks = tasks.filter((_, index) => index !== indexToRemove);
        setTasks(updatedTasks);
    };

    return (


    <>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        New Task:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        value={task.title}
                        onChange={(event) => setTask({title: event.target.value})}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Add Task
                </button>
            </form>
            <div>
                <h2>Tasks:</h2>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>{task} <button onClick={() => handleRemove(index)} className="btn btn-danger">Remove</button></li>
                    ))}
                </ul>
            </div>
    </>
  );
};
export default List;