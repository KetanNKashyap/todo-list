import reducer from './reducer';
import * as actionTypes from '../actions/actionTypes';

describe('reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            todoItems: []
        });
    });

    it('should add the correct todo', () => {
        expect(reducer({
            todoItems: ['todo 1']
        }, { 
            type: actionTypes.ADD_TODO_ITEM,
            todoItem: 'todo 2',
         })).toEqual({
            todoItems: ['todo 1', 'todo 2']
        });
    })

    it('should update the correct todo', () => {
        expect(reducer({
            todoItems: ['todo 1', 'todo 2']
        }, { 
            type: actionTypes.EDIT_TODO_ITEM,
            todoItemIndex: 1,
            todoItemEdited: 'todoChanged',
         })).toEqual({
            todoItems: ['todo 1', 'todoChanged']
        });
    })

    it('should delete the correct todo', () => {
        expect(reducer({
            todoItems: ['todo 1', 'todo 2']
        }, { 
            type: actionTypes.DELETE_TODO_ITEM,
            id: 0,
         })).toEqual({
            todoItems: ['todo 2']
        });
    })
});
