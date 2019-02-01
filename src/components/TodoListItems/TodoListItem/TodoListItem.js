import React from 'react';

const todoListItem = (props) => {
   // alert( props.todoItem[0])
   //console.log(props.id)

   return  <li>
                <p>{props.todoItem}</p>
                <div className='buttons'>
                    <button className='material-icons delete' onClick={props.onItemDeleted}>delete</button>
                    <button className='material-icons create' onClick={() => props.onItemEdited(props.todoItem)}>create</button>
                </div>
            </li>
        
};



export default todoListItem