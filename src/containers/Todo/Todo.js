import React, {Component} from 'react';
import { connect } from 'react-redux';
import TodoCreateForm from '../../components/TodoCreateForm/TodoCreateForm'
import TodoListItems from '../../components/TodoListItems/TodoListItems'
import TodoCounter from '../../components/TodoCounter/TodoCounter'
import * as actionCreators from '../../store/actions/todo';
import TodoListItemModal from '../../components/TodoListItemModal/TodoListItemModal'

class Todo extends Component {

    state = { 
        isOpen: false ,
       todoItemForEditing:{}
    };


    OnItemDeletedHandler = (itemIndex) => {
      this.props.onTodoDeleted(itemIndex)
    }

    OnItemEditedHandler = (itemIndex, todoItem) => {
        this.setState({
            isOpen: true,
            todoItemForEditing:{...this.state.todoItemForEditing, item:todoItem,index:itemIndex}
          });
    }

    onEditSavedHandler = (todoItemEdited) => {
        this.props.onTodoEdited(todoItemEdited, this.state.todoItemForEditing.index)
        this.setState({
            isOpen: false
          });
    }

    onModalCloseHandler = () => {
        this.setState({
          isOpen: false
        });
      }

    render()
    {
        const todoListItemModalProps = {
            onEditSaved:this.onEditSavedHandler,
            show:this.state.isOpen,
            itemToEdit:this.state.todoItemForEditing.item,
            onClose:this.onModalCloseHandler
        }

        const todoListItems = <TodoListItems todoItems={this.props.todoItems}
                                 OnItemEdited={this.OnItemEditedHandler}
                                 OnItemDeleted={this.OnItemDeletedHandler}>
                            </TodoListItems>
        return (
            <div>
                <TodoCounter count= {this.props.todoItems.length}/>
                {todoListItems}
                <TodoCreateForm/>
                <TodoListItemModal {...todoListItemModalProps}></TodoListItemModal>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todoItems: state.todoItems
    };
}

const mapDispatchToProps = dispatch => { 
    return {
        onTodoDeleted: (id) => dispatch(actionCreators.deleted(id)),
        onTodoEdited: (todoItemEdited, todoItemIndex) => dispatch(actionCreators.edit(todoItemEdited, todoItemIndex))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
