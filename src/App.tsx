import { useState } from 'react';
import { TodoList } from './components/TodoList';
import './index.css';
function App() {
    const [count, setCount] = useState(0);
    const [todo, setTodo] = useState<string>('');
    return (
        <div
            className='App w-screen h-screen flex flex-col gap-4 items-center justify-center'
            style={{
                backgroundImage:
                    'url("https://images.unsplash.com/photo-1598791318878-10e76d178023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
                backgroundSize: 'cover'
            }}
        >
            This will be a todo app
            <TodoList />
        </div>
    );
}

export default App;
