import React from 'react';
import {connect} from 'react-redux';
import './AddTaskButton.css';

class _AddTaskButton extends React.Component {
    render() {
        const isNullInput = this.props.inputValue.match(/^$/);

        return (
            <button
                className='add-task-button'
                onClick={() => {
                    if (this.props.todos.some(task => task.editing === true)) {
                        this.props.dispatch({
                            type: 'TASK_UPDATE',
                            payload: {
                                text: this.props.inputValue,
                                finished: false,
                                editing: false,
                            },
                        });
                    } else {
                        this.props.dispatch({
                            type: 'TASK_ADD',
                            payload: {
                                text: this.props.inputValue,
                                finished: false,
                                editing: false,
                            },
                        });
                    }

                    this.props.dispatch({
                        type: 'INPUT_CLEAR',
                    });
                }}
                disabled={isNullInput}
            >
                Add Task
            </button>
        );
    }
}

function mapStateToProps(state) {
    return {
        inputValue: state.inputValue,
        todos: state.todos,
    };
}

export const AddTaskButton = connect(mapStateToProps)(_AddTaskButton);
