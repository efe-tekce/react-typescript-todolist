import { useState } from 'react';

export const TodoList: React.FC = () => {
    interface item {
        id: number;
        text: string;
        completed: boolean;
    }
    const [todos, setTodos] = useState<item[]>([
        { id: 1, text: 'learn ts', completed: false },
        { id: 2, text: 'build a todo list', completed: false }
    ]);

    const [input, setInput] = useState<string>('');
    const handleToggle = (id: number) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            })
        );
    };
    const handleClick = () => {
        const newTodo: item = { id: Date.now(), text: input, completed: false };
        setTodos([...todos, newTodo]);
        setInput('');
    };
    return (
        <div className='flex flex-col gap-10 justify-center items-center opacity-80'>
            <h1>todo list</h1>
            <ul>
                {todos.map(todo => {
                    return (
                        <li
                            className='text-2xl text-blue-800'
                            key={todo.id}
                            onClick={() => handleToggle(todo.id)}
                            style={{
                                textDecoration: todo.completed
                                    ? 'line-through'
                                    : 'none'
                            }}
                        >
                            {todo.text}
                        </li>
                    );
                })}
            </ul>
            <input
                value={input}
                type='text'
                placeholder='add items'
                className='w-full bg-slate-100 rounded-md shadow-md text-center outline-none'
                onChange={e => setInput(e.target.value)}
            />
            <button
                onClick={handleClick}
                className='bg-purple-700 rounded-lg p-12 text-white'
            >
                Add
            </button>
        </div>
    );
};
