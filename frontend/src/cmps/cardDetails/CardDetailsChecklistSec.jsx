import React from 'react'

export function CardDetailsChecklistSec({ card, onRemoveCheckList,
    doneTodoToggle, onAddTodo, onAddTodoTitle, onToggleTodoInput,
    isAddingTodo, checklistProgress, newTodoTitle }) {

    return (
        <section className="card-details-check-list-container">
            <label>{card.checklist.title}</label>
            <button onClick={onRemoveCheckList} className="btn-remove-todo">Delete</button>
            <section className="check-list-progress-bar">
                <p>{Math.round(checklistProgress)}%</p>
                <progress
                    style={card.checklist.todos ? { display: 'block' } : { display: 'none' }}
                    value={card.checklist.todos && '' + checklistProgress}
                    max="100"
                >
                </progress>
            </section>
            {card.checklist?.todos?.map(todo =>
                <section className="check-list-todo" key={todo.id}
                    onClick={() => doneTodoToggle(todo.id)}
                >
                    <div className={`checkbox-todo checkbox-${todo.isDone ? 'checked' : 'unchecked'}`}>
                    </div>
                    <p className={`checkbox-${todo.isDone ? 'checked' : 'unchecked'}`}>
                        {todo.title}
                    </p>
                </section>
            )}
            <section className={`add-todo ${isAddingTodo ? 'shown' : 'hidden'}`} >
                <form onSubmit={onAddTodo}>
                    <input
                        type="text"
                        placeholder="Add an item"
                        className="input-add-todo"
                        autoComplete="off"
                        onChange={onAddTodoTitle}
                        value={newTodoTitle}
                    />
                    <div>
                        <button className="btn-add-todo">Add</button>
                        <div className="btn-close-add-todo" onClick={onToggleTodoInput}></div>
                    </div>
                </form>
            </section>
            {
                !isAddingTodo &&
                <button className="btn-add-todo-to-checklist" onClick={onToggleTodoInput}>Add an item</button>
            }
        </section >

    )
}