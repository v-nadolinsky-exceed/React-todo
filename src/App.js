import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemTodo from './components/ItemTodo';


class App extends React.Component {
  state = {
      arrayOfTask : [],
     /*  showArray: [], */
      inputValue: '',
      chechedAll: false,
      swith: "all"
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
      const newElem = {id: +new Date(), inputValue, completed:false}
      this.setState({
        arrayOfTask: [...arrayOfTask, newElem], 
        inputValue: ''
      })
    }
  }

  /* generateArray = () => {
    const {arrayOfTask} = this.state
    const completeArray = [];
    const activeArray = [];
      arrayOfTask.map(elem => {
      if(elem.completed === true) {
        return completeArray.push(elem)
      }else if(elem.completed === false) {
        return activeArray.push(elem)
      }else {
        return arrayOfTask
      }
    })
  } */

  generateArray = () => {
    const {arrayOfTask, showArray ,swith } = this.state
    const completeArray = null;
    const activeArray = null;

    if(swith === "active") {
      activeArray = arrayOfTask.filter(elem => elem.completed === false)
      return activeArray
     /*  this.setState({
        showArray : []
      }) */
    }else if (swith === "completed") {
      completeArray = arrayOfTask.filter(elem => elem.completed === true)
      return completeArray
    }else {
      return arrayOfTask
    }
  }

  


  render() {
    console.log(this.state.swith)
    return(
      <>
      <h1>ToDo</h1>
      <Header 
      handleChange={this.handleChange} 
      addTask={this.addTask} 
      generateArray={this.generateArray}
      /* isChecked={this.isChecked} */
      data={this.state} />
      <Footer swith={this.state.swith}/>
      </>
    )
  }
}

export default App;