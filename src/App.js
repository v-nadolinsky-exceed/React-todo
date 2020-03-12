import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemList from './components/ItemList';


class App extends React.Component {
  state = {
      arrayOfTask : [],
      inputValue: '',
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
   const {inputValue, arrayOfTask } = this.state
  if(event.key === 'Enter' && event.target.value !== '') {
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
      const task = newArray.find(task => task.id === id)
      task.completed = !task.completed
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
    data.splice(data.id,1);
    this.setState({data})
}


  allCompleted = () => {
    this.setState(state => {
      const newArray = [...state.arrayOfTask].map(task => {
        if (state.allCompleted) {
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


  render() {
    return(
      <>
      <h1>ToDo</h1>
      <Header 
        allCompleted={this.allCompleted}
        handleChange={this.handleChange} 
        addTask={this.addTask}
        value = {this.state.inputValue} 
      />
      <ItemList completedTask={this.completedTask} generateArrayWithFilter={this.generateArrayWithFilter} removeTask={this.removeTask}/>
      <Footer data={this.state} 
        setFilter={this.setFilter}
      removeCompletedTask={this.removeCompletedTask}
      />
      </>
    )
  }
}

export default App;
