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



  handleChange = (event) => {
    const newValue = event.target.value;
     this.setState(state => {
        return {
         inputValue: newValue
        }
    })
 }

 componentDidMount() {
  axios.get(`http://localhost:1234/todos/all`)
    .then(res => {
      console.log(res)
      const arrTask = []
        res.data.forEach(elem => {
          const arr = {
            id : elem._id,
            inputValue: elem.text,
            completed: elem.completed
          };
          arrTask.push(arr)
        })
        console.log(arrTask)
                this.setState({
                  arrayOfTask : arrTask
                })
    }).catch(err => console.log(err))
}


 addTask = (event) => {
   const {inputValue, arrayOfTask } = this.state
  if(event.key === 'Enter' && event.target.value !== '') {
      const id = +new Date()
      const newElem = {id: id, inputValue, completed: false } 
      toast(`Add task: ${inputValue}`)
      this.setState({
        arrayOfTask: [...arrayOfTask, newElem], 
        inputValue: ''
      })
      const newElem2 = { _id:id , text:inputValue ,completed:false }
      axios.post(`http://localhost:1234/todos/create`, {...newElem2})
      .then(res => console.log(res))
      .catch(err => console.log('err',err))
    }
  }

  getTask = (id,value) => {
    this.setState(state => {
      const newArr = [...state.arrayOfTask]
      newArr.map(task => {
          if(task.id == id) {
            axios.put(`http://localhost:1234/todos/${id}/update`,{
              text: value
         }).then(res => console.log("ok",res))
           .catch(err => console.log(err))
              task.inputValue = value
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
    this.setState(state => {
      const newArray = [...state.arrayOfTask]
      newArray.map(task => { 
         if(task.id === id) {
         task.completed = !task.completed;

         axios.put(`http://localhost:1234/todos/${id}/update`,{
            completed: true
         }).then(res => console.log("ok",res))
           .catch(err => console.log(err))

         toast.success(`Task completed: ${task.inputValue}`)
        }})
      return {
        arrayOfTask: newArray
      }
    }) 
  }


  removeCompletedTask = () => {
    const { arrayOfTask } = this.state
    const completedFalse = arrayOfTask.filter(elem => {
        if(elem.completed === true) {

          axios.delete(`http://localhost:1234/todos/${elem.id}/delete`)
          .then(res => console.log('delete',res))
          .catch(err => console.log(err))
        }

        return elem.completed === false
        })
    toast.warn("Remove completed task")
    this.setState({arrayOfTask : [...completedFalse] })
  }


  removeTask = (id) => {
    const data = this.state.arrayOfTask;
    let newArr = data.filter(task => {
      if(task.id === id ) {

        axios.delete(`http://localhost:1234/todos/${id}/delete`)
          .then(res => console.log('delete',res))
          .catch(err => console.log(err))

        toast.warn(`Remove task: ${task.inputValue}`)
      }
      return task.id !== id;
    })
    this.setState({ arrayOfTask : newArr })
  }

  
  allCompleted = () => {
    this.setState(state => {
      const newArray = [...state.arrayOfTask].map(task => {
        if (state.allCompleted) {
          task.completed = false
          
        } else {
          task.completed = true
        }
        axios.put(`http://localhost:1234/todos/${task.id}/update`,{
            completed: task.completed
         }).then(res => console.log("ok",res))
           .catch(err => console.log(err))
        return task
      })

      if(this.state.allCompleted) toast.info("No tasks marked")
      else toast.info("All tasks marked")

      return {
        arrayOfTask: newArray,
        allCompleted: !state.allCompleted
      }
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

