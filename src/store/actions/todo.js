import * as actionTypes from './actionTypes';

export const create = (todoItem) => {
    return  {
        type: actionTypes.ADD_TODO_ITEM,
        todoItem
    }
}

export const edit = (todoItemEdited, todoItemIndex) => {
    return  {
        type: actionTypes.EDIT_TODO_ITEM,
        todoItemEdited,
        todoItemIndex
    }
}

export const deleted = (id) => {
    return  {
        type: actionTypes.DELETE_TODO_ITEM,
        id
    }
}