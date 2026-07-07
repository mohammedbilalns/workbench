import { useEffect, useState } from "react"

const useRestaurentMenu = (resId)=>{
    const [resInfo , setResInfo] = useState(null)

    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=8.88140&lng=76.58500&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json()
        setResInfo(json.data)
        console.log(json)
    }


    return resInfo

}



export default useRestaurentMenu