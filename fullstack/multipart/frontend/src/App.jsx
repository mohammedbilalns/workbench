import { useState } from "react";


export default function App() {
  const [file , setFile ] = useState(null)

  async function upload(){
    if(!file) return 

    const formData = new FormData()
    formData.append("image", file)

    const response = await fetch("http://localhost:3000/upload", {
      method: "POST",
      body : formData
    })

    const data = await response.json()

    console.log(data)
  }


  return (
  <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={upload} >
        Upload
      </button>
    </div>
  )
}
