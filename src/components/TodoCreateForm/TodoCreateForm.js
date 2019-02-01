import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/todo';
import './TodoCreateForm.css'

class TodoCreateForm extends Component {
       state = {
             todoItem: '',
         }

    componentDidMount(){
        this.todoCreateElement.focus();
    }
  
    onTodoCreated(e, todoItem) {
        e.preventDefault()
        if(!todoItem)
            return;
    
        this.props.onTodoCreated(todoItem)
        this.setState({todoItem:''})
    }

    render()
    { 
        const { todoItem } = this.state
        
        return <form>
                    <div className='createItem'>
                            <input type="text" value={todoItem} placeholder="Type your todo here" ref={(inp)=> {this.todoCreateElement = inp}} onChange={(e) => this.setState({todoItem: e.target.value})}></input>
                            <button onClick={(e) => {this.onTodoCreated(e, todoItem)}}>Create</button>
                    </div>
            </form>
    }
} 

const mapDispatchToProps = dispatch => { 
    return {
        onTodoCreated: (todoItem) => dispatch(actionCreators.create(todoItem))
    }
}

export default connect(null, mapDispatchToProps)(TodoCreateForm);
