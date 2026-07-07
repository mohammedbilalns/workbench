import CountDisplay from "./components/CountDiplay"
import CountControls from "./components/CountControls"
import CountContextProvider from "./contexts/countContext"

function App() {


  return (
    <>
    <CountContextProvider>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", minWidth:"100vh"}}>
      <CountDisplay></CountDisplay>
    
      <CountControls></CountControls>
      </div>
     
    </CountContextProvider>
      
    </>
  )
}

export default App
