import * as actionTypes from '../actions/actionTypes';

const initialState = {
    todoItems: []
}

const createTodo = (state, action) => {
    /* Return a brand new deep copy of the Redux state */
    return {
        ...state,
        todoItems:[...state.todoItems, action.todoItem]
    };
}

const editTodo = (state, action) => {
    let todoItems = [...state.todoItems]
    todoItems[action.todoItemIndex] = action.todoItemEdited
     return {
       ...state,
       todoItems
   };
}

const deleteTodo = (state, action) => {
    let todoItems = [...state.todoItems]
    todoItems.splice(action.id, 1)
     return {
         ...state,
         todoItems: todoItems
     };
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.ADD_TODO_ITEM: return createTodo(state, action);
        case actionTypes.EDIT_TODO_ITEM: return editTodo(state, action);
        case actionTypes.DELETE_TODO_ITEM: return deleteTodo(state, action);
        default: return state;
    }
}

export default reducer;