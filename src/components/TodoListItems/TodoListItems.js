import React from 'react';
import TodoListItem from '../TodoListItems/TodoListItem/TodoListItem'
import './TodoListItems.css'

const todoListItems = (props) => 
    {
        const items =  props.todoItems.map((item, index) => 
                    <TodoListItem todoItem={item}
                                onItemDeleted={()=>props.OnItemDeleted(index)} 
                                onItemEdited={(todoItem)=>props.OnItemEdited(index, todoItem)}  
                                key={index}
                    />
                )

        return  <div className='listWrapper'>
                    <ul>
                        {items}
                    </ul>
                </div>
    }

export default todoListItems