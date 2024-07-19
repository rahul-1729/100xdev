import { useState } from 'react'


function App() {
 
//    const[todos,setTodos]=useState([]);
//    const[inputval,setInputval]=useState('');

//     function task(e)
//     {
//         setInputval(e.target.value);
//     }

//     function addtask()
//     {
//         setTodos([...todos,inputval]);
//         setInputval("");
//     }

//    return(
//     <div>
//           <input type="text" placeholder='task'  value={inputval} onChange={task} />
//           <button onClick={addtask}>Send</button>
//           <ul>
   
//              {todos.map((todo,index)=>(
//                <li key={index}>{todo}</li>
//              ))}
     
//           </ul>
//     </div>
//    )


return (
    <div>
        <CardWrapper innerComponent ={<TextComponent/>}/>
        <CardWrapper innerComponent ={<TextComponent/>}/>
        <CardWrapper innerComponent ={<TextComponent/>}/>
    </div>
)

}

function CardWrapper({innerComponent})
{
    return(
        <div style={{border: "2px solid black",padding:"20px", margin:"10px"}}>
             {innerComponent} 
             {/* bcz innerComponent is a jsx */}
        </div>
    )
}

function TextComponent()
{
    return(
       <div>
        hi there
       </div>
    )
}


 

export default App
