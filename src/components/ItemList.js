import React from 'react';
import ItemTodo from './ItemTodo';

const ItemList = (props) => {
    const { generateArrayWithFilter, completedTask ,removeTask} = props;
    const currentArrayOfTasks = generateArrayWithFilter();

    return (
        <div className="item-list">
            {
            currentArrayOfTasks.map(task => <ItemTodo key={task.id} removeTask={removeTask} completedTask={completedTask} {...task}/>)
            }
        </div>
    )
}

export default ItemList;