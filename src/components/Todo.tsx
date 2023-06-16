interface TodoProps {
    id?: number;
    title: string;
    isDone: boolean;
}

function Todo(props: TodoProps) {
    const status = props.isDone ? "DONE" : "NOT DONE";
    const color = props.isDone ? "green" : "red";
    return (
        <div className="todo">
            <span><b>#{props.id}</b></span>
            <span>{props.title}</span>
            <span style={{ color: color}}>{status}</span>
        </div>
    )
}

export default Todo