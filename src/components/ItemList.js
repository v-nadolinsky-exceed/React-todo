import React from 'react';
import ItemTodo from './ItemTodo';

const ItemList = (props) => {
     const { generateArrayWithFilter, completedTask ,removeTask,handlDblClick,newValueTask,isDoubleClick, saveInput,inputStateAfterClick} = props;
    const currentArrayOfTasks = generateArrayWithFilter();

    return (
        <div className="item-list">
            {
            currentArrayOfTasks.map(task => <ItemTodo key={task.id} 
                handlDblClick={handlDblClick} 
                removeTask={removeTask} 
                completedTask={completedTask} 
                newValueTask={newValueTask}
                isDoubleClick={isDoubleClick}
                saveInput={saveInput}
                inputStateAfterClick={inputStateAfterClick}
                {...task}/>)
            }
        </div>
    )
}

export default ItemList;