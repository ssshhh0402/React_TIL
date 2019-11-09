import React,{Component} from 'react';
//import { openSync } from 'fs';

class Control extends Component{
    render(){
        return(
        <ul>
          <li> <a href="/create" onClick = {function(e){
                e.preventDefault()
                this.props.onChangeMode('create')
          }.bind(this)}>CREATE</a></li>
          <li> <a href="/update" onClick = {function(e){
              e.preventDefault()
              this.props.onChangeMode('update')
          }.bind(this)}>UPDATE</a></li>
          <li> <input type='button' value='DELETE' onClick={function(e){
              e.preventDefault()
              this.props.onChangeMode('delete')
          }.bind(this)}></input></li>
        </ul>
        )
    }
}

export default Control