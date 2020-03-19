import React from 'react';
import axios from 'axios';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemList from './components/ItemList';



class App extends React.Component {
  state = {
      arrayOfTask : [],
      inputValue: '',
      inputStateAfterClick: true,
      currentValueForFilter: "all",
      allCompleted: false
  }


  async componentDidMount() {
      try{
        const request = await axios.get(`http://localhost:1234/todos/all`)
        const arrTask =  request.data.map(task => {
          return {id : task._id,
           inputValue : task.text,
           completed : task.completed}
      })
        this.setState({
        arrayOfTask : arrTask
      })
      }catch(err) {
        console.error(err)
      }
  }


  handleChange = (event) => {
    const newValue = event.target.value;
     this.setState({inputValue: newValue})
 }


 addTask = (event) => {
   const {inputValue, arrayOfTask } = this.state
  if(event.key === 'Enter' && event.target.value !== '') {
      // const id = +new Date()
      const newElem = { id: _id, inputValue, completed: false } 
      toast(`Add task: ${inputValue}`)
      this.setState({
        arrayOfTask: [...arrayOfTask, newElem], 
        inputValue: ''
      })
      const newElem2 = { text:inputValue ,completed:false }
      axios.post(`http://localhost:1234/todos/create`, {...newElem2})
      .then(res => console.log(res))
      .catch(err => console.error('err',err))
    }
  }

  getTask = (id,value) => {
    axios.put(`http://localhost:1234/todos/${id}/update`,{text: value})
      .then(res => {

      })
    this.setState(state => {
      const newArr = [...state.arrayOfTask]
      newArr.map(task => {
          if(task.id == id) {

         
         .then(res => {
           console.log(res)
           task.inputValue = value
        })
         .catch(err => console.error(err))  

        }
        })
        return {
          arrayOfTask: newArr
        }
    })
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
    axios.put(`http://localhost:1234/todos/${id}/update`,{
      completed: id.completed
   })
    .then(res => {
      const newArray = [...this.state.arrayOfTask]
      newArray.map(task => { 
         if(task.id === id) {
          task.completed = !task.completed;
         toast.success(`Task completed: ${task.inputValue}`)
        }
      })
      console.log(res)
      this.setState({arrayOfTask: newArray})
   })
  .catch(err => console.error(err))
      
  }


  removeCompletedTask = () => {
    axios.delete(`http://localhost:1234/todos/${elem.id}/delete`)
    .then(res => {
      console.log(res)
      const { arrayOfTask } = this.state
      const completedFalse = arrayOfTask.filter(elem => {
          return elem.completed === false
          })
      toast.warn("Remove completed task")
      this.setState({arrayOfTask : [...completedFalse] })
    })
    .catch(err => console.error(err))
   
  }


  removeTask = (id) => {
    axios.delete(`http://localhost:1234/todos/${id}/delete`)
    .then(res => {
      const data = this.state.arrayOfTask;
      const newArr = data.filter(task => {
        if(task.id === id ) {
          toast.warn(`Remove task: ${task.inputValue}`)
        }
        return task.id !== id;
      })
      this.setState({ arrayOfTask : newArr })
    })
    .catch(err => console.error(err))
          
  }


  allCompleted =  () => {
    axios.put(`http://localhost:1234/todo/${task.id}/update`,{
      completed: task.completed
    })
    .then(res => {
      const newArray = [...this.state.arrayOfTask].map(task => {
        if (this.state.allCompleted) {
          task.completed = false
          
        } else {
          task.completed = true
        }
        return task
      })
        this.setState({
          arrayOfTask: newArray,
          allCompleted: !this.state.allCompleted
       })
       if(this.state.allCompleted) toast.info("No tasks marked")
      else toast.info("All tasks marked")
    })

  }
 
  render() {
    return(
      <>
      <ToastContainer />
      <h1 className="title">todos</h1>
      <div className="container">
      <Header
        arrayOfTask={this.state.arrayOfTask} 
        allCompleted={this.allCompleted}
        handleChange={this.handleChange} 
        addTask={this.addTask}
        value = {this.state.inputValue} 
      />
      <ItemList 
      getTask={this.getTask}
      completedTask={this.completedTask}
      generateArrayWithFilter={this.generateArrayWithFilter} 
      removeTask={this.removeTask}
      inputStateAfterClick={this.state.inputStateAfterClick}
      arrayOfTask={this.state.arrayOfTask}
      />
      <Footer 
      data={this.state} 
      setFilter={this.setFilter}
      removeCompletedTask={this.removeCompletedTask}
      />
      </div>
      </>
    )
  }
}

export default App;

