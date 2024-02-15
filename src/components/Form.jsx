import React from 'react';

const Form = ({
    handleAddTodo
}) => {
  
    return (
    <>
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
    </>
  )
}

export default Form