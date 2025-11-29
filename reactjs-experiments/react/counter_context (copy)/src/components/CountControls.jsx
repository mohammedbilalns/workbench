import { useContext } from "react"
import { CountContext } from "../contexts/countContext"

export default function CountControls(){
    const {setCount} = useContext(CountContext)
    return <>
        <div>
            <button onClick={()=>setCount(prevcount=> prevcount+1)}>+</button>
            <button onClick={()=> setCount(prevcount => prevcount-1)}>-</button>
            <button onClick={()=> setCount(0)}>reset</button>
        </div>
    </>
}