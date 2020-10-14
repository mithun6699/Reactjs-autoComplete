import React, { Component } from 'react';

class AutoComplete extends Component {
    constructor(props){
        super(props);
      this.items = ["Mithun","Raj","GT"]
      this.state={
        suggestions:[]
    }
    }
  onTextChange= (e)=>{
const value = e.target.value
let suggestions = []
if(value.length>0){
    const regex = new RegExp(`^${value}`,'i')
    suggestions = this.items.sort().filter((i)=>regex.test(i))

}
this.setState(()=>({suggestions}))

  }
  renderSuuggestions (){
      const {suggestions} = this.state
      if(suggestions.length===0){
          return null
      }
      return(
        <ul>
        {suggestions.map((i)=>  <li>
            {i}
        </li>)}
      
    </ul>
    
      )
  }
  render() {
    return (
      <div> <input type="text" onChange={this.onTextChange}/>
{this.renderSuuggestions()}
      </div>
    );
  }
}

export default AutoComplete;
