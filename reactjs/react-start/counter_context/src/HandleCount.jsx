import { useContext } from "react"
import countContext from "./CountContext"

export default function HandleCount(){
    const {setCount} = useContext(countContext)
    
    return (

        <div>
            <button onClick={()=>setCount(prev => prev+1)}>+</button>
            <button onClick={()=> setCount(prev => prev-1)}>-</button>
            <button onClick={()=> setCount(0)}>reset</button>
        </div>
    )
}