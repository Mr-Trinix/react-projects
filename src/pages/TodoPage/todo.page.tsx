import { useState } from "react";
import Todo from "../../components/Todo";

import { Helmet } from "react-helmet";

interface Todo {
    title: string,
    isDone: boolean
}

function TodoPage() {
    const [todoTitle, setTodoTitle] = useState("");
    const [todos, setTodos] = useState<Todo[]>([])

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newTodo = {
            title: todoTitle,
            isDone: false,
        }
        setTodos([...todos, newTodo])
        setTodoTitle("");
    }

    return (
        <div>

            <Helmet>
                <title>Custom Page Title</title>
            </Helmet>

            <h1>Todo App</h1>
            <form onSubmit={handleSubmit}>
                <input
                    name="title"
                    type="text"
                    placeholder="Title"
                    value={todoTitle}
                    onChange={(e) => setTodoTitle(e.target.value)}
                    style={{ marginRight: "1rem" }}
                />
                <button onSubmit={() => handleSubmit} disabled={todoTitle.length < 1}>Add</button>
            </form>

            {todos.map((todo, index) => {
                return (
                    <Todo
                        key={index}
                        id={index + 1}
                        title={todo.title}
                        isDone={todo.isDone}
                    />
                )
            })}
        </div>
    )
}

export default TodoPage
