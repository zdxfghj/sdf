import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployeesAddForm from '../employers-add-form/employers-add-form';

import './app.css';
 
class App extends Component{
   constructor(props){
      super(props);
      this.state = {
         data : [
            {name: 'Alex F.D' , salary : 1200, increase:false,rise: false, id:1 },
            {name: "Johan Y.K" , salary : 600, increase:true,rise: true, id:2 },
            {name: "Frenk H.S" , salary : 900,increase:false,rise: false, id:3 },
         ],
         term: '', filter: ''
      }
      this.idMax = 4;
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

   seachEmp = (items, term) =>{
         if(term.length === 0){
            return items;
         }
         return items.filter(item =>{
             return item.name.indexOf(term) > -1
         })
   }

   addItem = (name,salary) =>{
      const newItem ={
         name,
         salary,
         increase : false,
         rise : false,
         id : this.idMax++
      }
      this.setState(({data}) =>{
         const newArr = [...data,newItem];
         return{
            data : newArr
         }
      });
   }

   onToggleRise = (id) =>{  ///метод
      //есть 3 способа 
      // this.setState(({data})  =>{
      //    const index = data.findIndex(elem => elem.id === id);
      //    const old = data[index];
      //    const newItem = {...old, increase : !old.increase};
      //    const newArr = [...data.slice(0,index), newItem,...data.slice(index+1)];
      //    return{
      //       data: newArr
      //    }   
      // })

      this.setState(({data})  =>({
         data: data.map(item =>{
            if (item.id === id){
               return {...item, rise : !item.rise}
            }
            return item;
         })
      }))
     
   }                 


   onToggleIncrease = (id) =>{  ///метод
      this.setState(({data})  =>({
         data: data.map(item =>{
            if (item.id === id){
               return {...item, increase : !item.increase}
            }
            return item;
         })
      }))
   }   

   filterPost =(items,filter) =>{
      switch(filter){
         case 'rise':
            return items.filter(item => item.rise);
         case 'moreWhen1000':
            return items.filter(item => item.salary>1000);
         default:
            return items;
      }
   }

   onFilterSelect = (filter) =>{
      this.setState({filter});
   }

   render(){
      const {data,term,filter} = this.state;
      const employeers = this.state.data.length;
      const increase = this.state.data.filter(item => item.increase).length;
      const visibleData = this.filterPost(this.seachEmp(data,term),filter)

      return(
         <div className="app">
            <AppInfo 
               employeers = {employeers}
               increase = {increase}
            />
   
            <div className='search-panel'>
                  <SearchPanel onUpdateSearch = {this.onUpdateSearch}/>
                  <AppFilter 
                     filter = {filter}
                     onFilterSelect = {this.onFilterSelect}
                     />
            </div>
   
            <EmployersList 
               data = {visibleData}
               onDelete = {this.deleteItem}
               onToggleRise = {this.onToggleRise}
               onToggleIncrease = {this.onToggleIncrease}
               />
            <EmployeesAddForm onAdd = {this.addItem}/>
         </div>
      );
   }
}

export default App;