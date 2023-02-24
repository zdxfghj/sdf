import EmployersListItem from "../employers-list-item/employers-list-item";

import "./employera-list.css"

const EmployersList = ({data,onDelete,onToggleRise,onToggleIncrease}) =>{
   
   const elements = data.map(item =>{
      const {id, ...itemProps} = item;

      return(
         <EmployersListItem 
            key={id}
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleRise={()=>{onToggleRise(id)}}
            onToggleIncrease={()=>{onToggleIncrease(id)}}/> //
      )
   })
   
   return(
      <ul className="app-list list-group">
         {elements}
      </ul>
   ); 
}

export default EmployersList;