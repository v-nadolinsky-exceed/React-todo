import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemList from './components/ItemList';
import ItemTodo from './components/ItemTodo';


class App extends React.Component {
  state = {
      arrayOfTask : [],
      inputValue: '',
      editedValue: '',
      // inputStateAfterClick: true,
      currentValueForFilter: "all",
      allCompleted: false
  }

  handleChange = (event) => {
    const newValue = event.target.value;
     this.setState(state => {
        return {
         inputValue: newValue
        }
    })
 };

 addTask = (event) => {
   const {inputValue, arrayOfTask ,editedValue,inputStateAfterClick} = this.state
  if(event.key === 'Enter' && event.target.value !== '') {
    // let value = null
    // if(inputStateAfterClick) value = inputValue
    // else  value = 'as'
      const newElem = {id: +new Date(), inputValue, completed: false } 
      this.setState({
        arrayOfTask: [...arrayOfTask, newElem], 
        inputValue: ''
      })
    }
  }

  setFilter = (value) => {
    this.setState({currentValueForFilter: value})
  }

  filterArrayOfItems = (array, condition) => array.filter(item => item.completed !== condition)

  generateArrayWithFilter = () => {
    const { arrayOfTask, currentValueForFilter } = this.state;
    switch (currentValueForFilter) {
      case "active" : 
        return this.filterArrayOfItems(arrayOfTask, true);
      case "completed": 
        return this.filterArrayOfItems(arrayOfTask, false);
        default:
          return arrayOfTask;
    }
  }

  completedTask = (id) => {
    this.setState(state => {
      const newArray = [...state.arrayOfTask]
      newArray.map(task => { if(task.id === id) task.completed = !task.completed })
      return {
        arrayOfTask: newArray
      }
    })
  }

  removeCompletedTask = () => {
    const { arrayOfTask } = this.state
    const completedFalse = arrayOfTask.filter(elem =>{
        return elem.completed === false
        })
    this.setState({arrayOfTask : [...completedFalse] })
  }

  removeTask = (id) => {
    const data = this.state.arrayOfTask;
    let newArr = data.filter(task => task.id !== id)
    this.setState({ arrayOfTask : newArr })
  }

  allCompleted = () => {
    this.setState(state => {
      const newArray = [...state.arrayOfTask].map(task => {
        if (state.allCompleted) {
          // return {...task, write new property here}
          task.completed = false
        } else {
          task.completed = true
        }
        return task
      })
      return {
        arrayOfTask: newArray,
        allCompleted: !state.allCompleted
      }
    })
  }

  newValueTask = (e) => {
    let value = e.target.value
   this.setState (state =>({
      editedValue : value,
   }))
  }

  handlDblClick = () => {
        this.setState(state =>({
            inputStateAfterClick: !state.inputStateAfterClick
        }))
  }

  render() {
    console.log(this.state.editedValue)
    return(
      <>
      <h1 className="title">todos</h1>
      <div className="container">
      <Header 
        allCompleted={this.allCompleted}
        handleChange={this.handleChange} 
        addTask={this.addTask}
        value = {this.state.inputValue} 
      />
      <ItemList completedTask={this.completedTask}
      generateArrayWithFilter={this.generateArrayWithFilter} 
      removeTask={this.removeTask}
      newValueTask={this.newValueTask}
      handlDblClick={this.handlDblClick}
      saveInput={this.saveInput}
      inputStateAfterClick={this.state.inputStateAfterClick}
      />
      <Footer data={this.state} 
        setFilter={this.setFilter}
      removeCompletedTask={this.removeCompletedTask}
      />
      </div>
      </>
    )
  }
}

export default App;

