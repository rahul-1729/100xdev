import { useState } from 'react'

 
 

function App() {
  const [count, setCount]=useState(0);
  return(
    <div>
          <CreateButton count ={count} setCount={setCount}/>
         
    </div>
    
  );
  
}

function CreateButton(props)
{
   function counter()
   {
     props.setCount(props.count+1);
   }

   return <button onClick={counter}>Count {props.count}</button>


}

export default App
