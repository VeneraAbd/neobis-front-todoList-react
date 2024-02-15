import React, {useRef} from 'react'

const TodoItem = ({
  todos,
  handleToggleTodo,
  handleEditTodo,
  handleDeleteTodo

}) => {
  const inputRef = useRef();
  return (
    <>
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
                                    ref={inputRef}
                                    onChange={(e) => handleEditTodo(index, e.target.value)}
                                />
                            </div>
                            <div className="actions">
                                <button className="edit" onClick={() => handleEditTodo(index, todo.content)}>Edit</button>
                                <button className="delete" onClick={() => handleDeleteTodo(index)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        
    </>
  )
}

export default TodoItem