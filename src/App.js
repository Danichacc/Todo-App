import {TaskInput} from './components/TaskInput/TaskInput';
import {AddTaskButton} from './components/AddTaskButton/AddTaskButton';
import {TaskList} from './components/TaskList/TaskList';
import './App.css';

function App() {
    return (
        <div className='todo'>
            <div className='todo-controls'>
                <TaskInput />
                <AddTaskButton />
            </div>
            <TaskList />
        </div>
    );
}

export default App;
