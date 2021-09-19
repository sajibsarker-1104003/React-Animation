import React,{Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import './App.css';


class App extends Component {

  state={
    show:true,
  }
  render() {
    const animateTime={
      enter:2500,
      exit:1000,
    }
    
    return (
      <div className="App">
        
        <h1>React Animation</h1>
        <button onClick={()=>this.setState({show:!this.state.show})}>Toggle</button>

        <CSSTransition 
        in={this.state.show} 
        timeout={animateTime} 
        mountOnEnter 
        unmountOnExit
        onEnter={()=>console.log("onEnter")}
        onEntering={()=>console.log("onEntering")}
        onEntered={()=>console.log("onEntered")}
        onExit={()=>console.log("onExit")}
        onExited={()=>console.log("onExited")}
        onExiting={()=>console.log("onExiting")}
        className="myClass"

        >
          {
           mode=>(//<p>{mode}</p>
        <div style={{
            background:"black",
            color:"white",
            borderRadius:4,
            //opacity:mode==="exiting"?0:1 || mode==="entering"?1:0,
            //transition:'opacity 2s ease-out',
          }}>
          <p>Hello Sajib!!</p>
  
        </div>
        )
          }
        
        </CSSTransition>

        <p>I am Outside Transition</p>
      </div>
    );

  }
 
}

export default App;
