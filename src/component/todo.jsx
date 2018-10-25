import React, {Component} from 'react';
import Preview from './preview.jsx';

class Todo extends Component {
    constructor() {
        super();

        this.state = {
            message: '',
            todo: [],
            editing: false,
            index: '',
        };
    }
    getValue = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value,
        })
        console.log(name, value);
    }
    updateData = () => {
        const updated = this.state.todo.slice(0);
        updated.push(this.state.message);
        this.setState({
            todo: updated,
            message: '',
        });
    }
    onDismiss = ind => {
        const deleted = this.state.todo.slice(0);
        this.setState({
            message: '',
            editing: false,
            todo: deleted.filter((value, index) => index !== ind),
        });
    }
    getIndex = index => {
        const getRow = this.state.todo[index];
        this.setState({
            editing: true,
            message: getRow,
            index,
        });
    }
    updateRow = () => {
        const theRow = this.state.todo.slice(0);
        theRow[this.state.index] = this.state.message;
        this.setState({
            editing: false,
            todo: theRow,
            message: '',
        })
    }
    render() {
        return(
            <div className='container'>
                <h3>TODO App</h3>
                <div className='form-group'>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <input
                                        type='text' value={this.state.message} name='message'
                                        className='form-control' onChange={this.getValue} />
                                </td>
                                <td>
                                    {!this.state.editing ? 
                                        <input
                                            type='button' value='Submit' onClick={this.updateData} 
                                            className='btn btn-primary' />
                                            :
                                            <input
                                                type='button' value='Update' onClick={this.updateRow} 
                                                className='btn btn-secondary' />
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    {this.state.todo.length > 0 ?
                        <Preview 
                            data={this.state.todo} onDelete={this.onDismiss}
                            onEdit={this.getIndex} /> :
                        ''}
                </div>
            </div>
        );
    }
}

export default Todo;