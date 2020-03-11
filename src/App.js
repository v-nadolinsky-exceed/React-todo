import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemTodo from './components/ItemTodo';


class App extends React.Component {
  state = {
      arrayOfTask : [],
      inputValue: '',
      swith: "all",
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
      const newElem = {id: +new Date(), inputValue, completed: null}
      this.setState({
        arrayOfTask: [...arrayOfTask, newElem], 
        inputValue: ''
      })
    }
  }

  // itemLeft = () => {
  //   const {arrayOfTask} = this.state
  //   let value = null;
  //   value = arrayOfTask.filter(elem => elem.completed === false)
  //   return value
  //   /* this.setState({itemLeft: value.length}) */
  // }

  removeCompletedTask = (e) => {
    e.preventDefault()
    const { arrayOfTask } = this.state
    const completedFalse = arrayOfTask.filter(elem =>{
        return elem.completed === null
        })
    this.setState({arrayOfTask : [...completedFalse] })
  }

  generateArray = () => {
    const {arrayOfTask, showArray ,swith } = this.state
    let completeArray = null;
    let activeArray = null;

    if(swith === "active") {
      activeArray = arrayOfTask.filter(elem => elem.completed === null)
      return activeArray
    }else if (swith === "completed") {
      completeArray = arrayOfTask.filter(elem => elem.completed === true)
      return completeArray
    }else {
      return arrayOfTask
    }
  }

  all = () => {
    this.setState({swith: "all"})
  }

  active = () => {
    this.setState({swith: "active"})
  }

  completed = () => {
    this.setState({swith: "completed"})
  }


  render() {
    return(
      <>
      <h1>ToDo</h1>
      <Header 
      handleChange={this.handleChange} 
      addTask={this.addTask} 
      generateArray={this.generateArray}
      data={this.state} />
      <Footer data={this.state} 
      all={this.all} 
      active={this.active} 
      completed={this.completed} 
      /* itemLeft={this.itemLeft}  */
      removeCompletedTask={this.removeCompletedTask}
      />
      </>
    )
  }
}

export default App;
