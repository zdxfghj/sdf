import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';

import './app.css';
function App(){

   const data = [
      {name: 'Alex F.D' , salary : 1200, increase:false },
      {name: "Johan Y.K" , salary : 600, increase:true },
      {name: "Frenk H.S" , salary : 900,increase:false },
   ];

   return(
      <div className="app">
         <AppInfo/>

         <div className='search-panel'>
               <SearchPanel/>
               <AppFilter/>
         </div>

         <EmployersList data = {data}/>
      </div>
   );
}

export default App;