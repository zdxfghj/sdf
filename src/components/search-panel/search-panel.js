import { Component } from "react";
import "./search-panel.css"

class SearchPanel extends Component{
  constructor(props){
   super(props);
   this.state = {
      term: ''
   }
  }
  

  onUpdateSearch = (e) =>{
   const term = e.target.value; //новая локальная переменная берет значение  из формы при вводе 
   this.setState({term}); // установка локального состояния term
   this.props.onUpdateSearch(term); // пробрасываем состояние на верх в главный класс
  }
  
   render(){
   return (
      <input
         type = "text"
         className="form-control search-input"
         placeholder="Найти сотрудника"
         value={this.state.term}
         onChange={this.onUpdateSearch}/>
   ) 
  }
}

export default SearchPanel;