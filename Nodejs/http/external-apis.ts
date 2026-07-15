
const API_URL = "https://jsonplaceholder.typicode.com/users/1"

type PlaceholderUser = {
  id: number;
  name: string;
  email: string;
  company : {
    name: string;
  }
}

type PublicUser = {
  id: number;
  name: string;
  email: string;
  company : string
}

function transformUser(rawData : PlaceholderUser) : PublicUser {
  return {
    id: rawData.id,
    name: rawData.name,
    email: rawData.email,
    company: rawData.company.name
  }
}

async function fetchUser(): Promise<PublicUser | undefined> {

  const controller = new AbortController() 

  const timer = setTimeout(() => {
    controller.abort()
  }, 5000)
  
  try{
    const response = await fetch(API_URL, {
      method:"GET",
      signal:controller.signal
    })

    if(!response.ok){
      console.error("Api failed: ", response.statusText)
      return 
    }
    const rawUser = (await response.json()) as PlaceholderUser
    return transformUser(rawUser)

  }catch(error){

    if(error instanceof Error && error.name == "AbortError"){
      console.error("AbortError : Api tool so long ",)
    }
    const msg = error instanceof Error ? error.message : "Unknown error"
    console.error("Error : ", msg)
  }finally{
    clearTimeout(timer)
  }
  

}
