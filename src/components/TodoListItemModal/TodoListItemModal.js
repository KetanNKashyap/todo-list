import React, {Component} from 'react';
import './TodoListItemModel.css';

class TodoListItemModal extends Component{

    state = {
          todoMessageEdited: ''
        }


    componentWillReceiveProps(nextProps)
    {
        this.setState({todoMessageEdited:nextProps.itemToEdit})
    }

    render()
    {
        if(!this.props.show) {
            return null;
        }

        const { todoMessageEdited } = this.state

        return  <div className="BackdropStyle">
                    <div className='overlay' onClick={this.props.onClose}></div>
                    <div  className="ModalStyle">
                        <div className='mheader'>Edit Todo</div>
                        <div className='mbody'>
                            <textarea value={todoMessageEdited} onChange={(e) => this.setState({todoMessageEdited: e.target.value})}></textarea>
                            <button onClick={() => this.props.onEditSaved(todoMessageEdited)}>Save</button>
                            <button className='grey' onClick={this.props.onClose}>Cancel</button>
                        </div>
                    </div>
                </div>
    }

};



export default TodoListItemModal