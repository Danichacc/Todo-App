import React from 'react';
import {connect} from 'react-redux';
import './TaskList.css';

class _TaskList extends React.Component {
    render() {
        return (
            <div className='task-list'>
                {this.props.todos.map(
                    (task, index) => (
                        <div>
                            <input
                                type='checkbox'
                                checked={task.finished}
                                onClick={() => this.props.dispatch({
                                    type: 'CHECKBOX_TOGGLE',
                                    payload: index,
                                })}
                            />
                            <div className={task.finished ? 'finished' : 'unfinished'} >
                                {task.text}
                            </div>
                            <button
                                className='button-edit'
                                onClick={() => {
                                    if (this.props.todos.some(task => task.editing === true)) {
                                        return;
                                    }

                                    this.props.dispatch({
                                        type: 'TASK_EDIT',
                                        payload1: task.text,
                                        payload2: index,
                                    })
                                }}
                                disabled={task.finished}
                            >
                                Edit
                            </button>
                            <button
                                className='button-delete'
                                onClick={() => this.props.dispatch({
                                    type: 'TASK_DELETE',
                                    payload: index,
                                })}
                            >
                                Delete
                            </button>
                        </div>
                    )
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        inputValue: state.inputValue,
        todos: state.todos,
    };
}

export const TaskList = connect(mapStateToProps)(_TaskList);
