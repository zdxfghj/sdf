import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';

import './app.css';
 
class App extends Component{
   constructor(props){
      super(props);
      this.state = {
         data : [
            {name: 'Alex F.D' , salary : 1200, increase:false, id:1 },
            {name: "Johan Y.K" , salary : 600, increase:true, id:2 },
            {name: "Frenk H.S" , salary : 900,increase:false, id:3 },
         ]
      }
   }
   
   deleteItem = (id) => {
      this.setState(({data}) =>{

         // const index = data.findIndex(elem =>elem.id === id);
         // const before = data.slice(0, index);
         // const after = data.slice(index+1);
         // const newArr = [...before, ...after];

         return{
            // data : newArr
            data : data.filter(item => item.id !== id)
         }
      })
   }

   render(){
      return(
         <div className="app">
            <AppInfo/>
   
            <div className='search-panel'>
                  <SearchPanel/>
                  <AppFilter/>
            </div>
   
            <EmployersList 
               data = {this.state.data}
               onDelete = {this.deleteItem}/>
         </div>
      );
   }
}

export default App;