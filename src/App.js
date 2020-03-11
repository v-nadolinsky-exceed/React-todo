import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemTodo from './components/ItemTodo';


class App extends React.Component {
  state = {
      arrayOfElements : [],
      inputValue: '',
      chechAll: false
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
   const {inputValue, arrayOfElements } = this.state
  if(event.key === 'Enter' && event.target.value !== '') {
      const  generId = arrayOfElements.length+1;
      const newElem = {id: generId, inputValue, completed:false}
      this.setState(state => {
        const newArr = state.arrayOfElements.concat()
        newArr.push(newElem)
        return {
          arrayOfElements: newArr, 
          inputValue: ''
        }
      })
    }
  }

  render() {
    const {inputValue, arrayOfElements} = this.state
       console.log(arrayOfElements)
    return(
      <>
      <h1>ToDo</h1>
      <Header 
      handleChange={this.handleChange} 
      addTask={this.addTask} 
      inputValue={inputValue} 
      data={arrayOfElements} />
      <Footer />
      </>
    )
  }
}

export default App;