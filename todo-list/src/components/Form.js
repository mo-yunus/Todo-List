import React from 'react'
import { v4 } from "uuid"

const Form = ({ todos, setTodos, inputText, setInputText }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, { text: inputText, completed: false, id: v4() }
        ]);
        setInputText("");
    }

    return (
        <div>
            <form >
                <input value={inputText} onChange={inputTextHandler} type="text" className='todo-input' />
                <button onClick={submitTodoHandler} className='todo-button' type='submit'>
                    <i className='fas fa-plus-square'></i>
                </button>
                <div className='select'>
                    <select name="todos" className='filter-todo'>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Umcompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Form
