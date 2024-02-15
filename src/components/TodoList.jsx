import React, { useState, useEffect  } from 'react';
import Name from './Name';
import TodoItem from './TodoItem';
import Form from './Form';


const TodoList = () => {
    
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos]);
    
    //adding new todos
    const handleAddTodo = (e) => {
        e.preventDefault();
        const content = e.target.elements.content.value.trim();
        const category = e.target.elements.category.value;

        if (content) {
            const newTodo = { content, category, done: false };
            setTodos([...todos, newTodo]);
            e.target.reset();
        } else {
            alert("Todo content cannot be empty.");
        }
    };

    const handleToggleTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].done = !updatedTodos[index].done;
        setTodos(updatedTodos);
    };

    const handleEditTodo = (index, newValue) => {
        const updatedTodos = [...todos];
        updatedTodos[index].content = newValue;
        setTodos(updatedTodos);
    };
    
    const handleDeleteTodo = (index) => {
        const updatedTodos = todos.filter((todo, i) => i !== index); 
        setTodos(updatedTodos);
    };

    return (
        <main className="container">
            <Name/>

            <Form handleAddTodo={handleAddTodo}/>

            <TodoItem
                todos={todos}
                handleToggleTodo={handleToggleTodo}
                handleEditTodo={handleEditTodo}
                handleDeleteTodo={handleDeleteTodo}
            />
        </main>
    );
}

export default TodoList;
