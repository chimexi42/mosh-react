import React, { Component } from "react";

import Counter from "./components/Counter";
import Counters from './components/Counters';
import Navbar from "./components/Navbar";



class App extends Component{
    state ={
        counters: [
            {id:1, value:4},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0}
        ]
    }

    constructor(props){
        super(props)
        console.log('App-constructor')
    }

    componentDidMount(){
        console.log('App mounted')
    }
   
    handleIncrement= counter =>{
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index] = {...counter}
        counters[index].value ++
        console.log(this.state.counters[index])
        this.setState({counters})
      }
 
      handleDelete =(counterID) =>{
         const counters  = this.state.counters.filter(c => c.id !== counterID)
         this.setState({counters})
      }
      handleReset=()=>{
          const counters = this.state.counters.map(c=> {
            c.value =0;
              return c
          })
          this.setState({counters})
      }
      render(){
          console.log('App- rendered')
       
      return (
            <div>
           <Navbar totalCounters = {this.state.counters.filter(c => c.value> 0).length}/>
           <div className="container">
            <Counters
            counters= {this.state.counters}
            onReset = {this.handleReset}
            onIncrement = {this.handleIncrement}
            onDelete = {this.handleDelete}/>
           </div>
       </div>
      );
      }
    

    }


export default App;