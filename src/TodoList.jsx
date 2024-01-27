import React, { useState, useEffect } from 'react';
import './index.css';

const TodoList = () => {
    const [username, setUsername] = useState(localStorage.getItem('username') || '');
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

    useEffect(() => {
        localStorage.setItem('username', username);
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [username, todos]);

    //here I am getting name input value and assigning it to the username state
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    //adding new todos
    const handleAddTodo = (e) => {
        e.preventDefault();
        const content = e.target.elements.content.value;
        const category = e.target.elements.category.value;
        const newTodo = { content, category, done: false};
        
        setTodos([...todos, newTodo]);
        e.target.reset();
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
            <section className="name-container">
                <h2 className="title">What's up,
                    <input
                        type="text"
                        placeholder="Name here"
                        id="user-name"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </h2>
            </section>

            <section className="create-todo">
                <h3 className="heading3">CREATE A TODO</h3>

                <form id="create-todo__form" onSubmit={handleAddTodo}>
                    <h4 className="heading4">What's on your todo list?</h4>
                    <input
                        type="text"
                        placeholder="e.g. get a milk"
                        id="add-todo"
                        name="content"
                    />
                    <h4 className="heading4">Pick a category</h4>
                    <div className="todo-categories">
                        <div className="category">
                            <input
                                type="radio"
                                value="business"
                                id="business"
                                className="circle business"
                                name="category"
                            />
                            <label htmlFor="business" className="radio-label">Business</label>
                        </div>
                        <div className="category">
                            <input
                                type="radio"
                                value="personal"
                                id="personal"
                                className="circle personal"
                                name="category"
                            />
                            <label htmlFor="personal" className="radio-label">Personal</label>
                        </div>
                    </div>
                    <input type="submit" className="add-button" value="Add todo" />
                </form>
            </section>

            <section className="todo-list">
                <h3 className="heading3">TODO LIST</h3>
                <div className="list" id="todo-list">
                    {todos.map((todo, index) => (
                       
                        <div key={index} className={`todo-item ${todo.done ? 'done' : ''}`}>
                            <label>
                                <input
                                    type="checkbox"
                                    className={`circle ${todo.category}`}
                                    checked={todo.done}
                                    onChange={() => handleToggleTodo(index)}
                                />
                            </label>
                            <div className="todo-content">
                                <input
                                    type="text"
                                    value={todo.content}
                                    readOnly={!todo.done}
                                    onChange={(e) => handleEditTodo(e.target.value)}
                                />
                            </div>
                            <div className="actions">
                                <button className="edit" onClick={() => handleEditTodo(index)}>Edit</button>
                                <button className="delete" onClick={() => handleDeleteTodo(index)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default TodoList;
