import { useEffect } from "react"

export default function MemoComponent({count}){

    useEffect(()=>{
        console.log("Child rerendered")
    })
    return (
        <p>{count}</p>
    )
}