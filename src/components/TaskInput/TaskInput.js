import React from 'react';
import {connect} from 'react-redux';
import './TaskInput.css';

class _TaskInput extends React.Component {
    render() {
        return (
            <input
                className='task-input'
                value={this.props.inputValue}
                onChange={event => this.props.dispatch({
                    type: 'INPUT_CHANGE',
                    payload: event.target.value,
                })}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        inputValue: state.inputValue,
        todos: state.todos,
    };
}

export const TaskInput = connect(mapStateToProps)(_TaskInput);
