import React,{Component } from 'react';
// import Router from './Config/router'
import Practice from './Component/Practice'
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import reducer from './reducer/reducer'
import {connect} from 'react-redux'
class App extends Component
{
  constructor()
  {
    super();
    this.state=
    {
      
    }
  }
  render()
  { 
    console.log("props====>",this.props.myname)
  const store = createStore(reducer);
  return(
   <Provider store={store}>
    <Text>Hello</Text>
     </Provider>
      
    )
  }
}
const mapStateToProps = (state) =>
{
  return {
    myname:state.name
  }

}

export default connect(mapStateToProps)(App);