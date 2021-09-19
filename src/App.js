import React,{Component} from 'react';
import {Transition} from 'react-transition-group';
import './App.css';


class App extends Component {

  state={
    show:true,
  }
  render() {
    
    return (
      <div className="App">
        
        <h1>React Animation</h1>
        <button onClick={()=>this.setState({show:!this.state.show})}>Toggle</button>

        <Transition in={this.state.show} timeout={3000}>
          {
           mode=>(//<p>{mode}</p>
        <div style={{
            background:"black",
            color:"white",
            borderRadius:4,
            opacity:mode==="exiting"?0:1,
            transition:'opacity 2s ease-out',
          }}>
          <p>Hello Sajib!!</p>
  
        </div>
        )
          }
        
        </Transition>
      </div>
    );

  }
 
}

export default App;
