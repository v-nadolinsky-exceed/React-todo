import React from 'react';
import ItemTodo from './ItemTodo';

const ItemList = (props) => {
<<<<<<< HEAD
    const { generateArrayWithFilter, completedTask ,removeTask,handlDblClick,newValueTask,isDoubleClick, saveInput,inputStateAfterClick,arrayOfTask,getTask} = props;
=======
    const { generateArrayWithFilter, completedTask ,removeTask,handlDblClick,newValueTask,isDoubleClick, saveInput,inputStateAfterClick,arrayOfTask,editedValue,getTask} = props;
>>>>>>> 400fbae2374b28eda78311ca98ff9b0ebdd61b58
    const currentArrayOfTasks = generateArrayWithFilter();

    return (
        <div className="item-list">
            {
            currentArrayOfTasks.map(task => <ItemTodo key={task.id} 
                getTask={getTask}
                handlDblClick={handlDblClick} 
                removeTask={removeTask} 
                completedTask={completedTask} 
                newValueTask={newValueTask}
                isDoubleClick={isDoubleClick}
                saveInput={saveInput}
                inputStateAfterClick={inputStateAfterClick}
                arrayOfTask={arrayOfTask}
                {...task}
                />)
            }
        </div>
    )
}

export default ItemList;