import {useForm} from '@tanstack/react-form'
import './App.css'

interface User {
  firstName : string 
  lastName : string
  hobies : Array<string>
}

const defaultUser : User = {firstName : "", lastName : '', hobies : []}

function App() {

  const form = useForm({
    defaultValues: defaultUser,
    onSubmit : async ({value}) => {
      console.log(value)
    }
  })


  return (
    <>
      <form.Field
        name = "firstName"
        validators={{
          onChange: ({value }) => (value.toUpperCase()) 
        }}

        children={(field) => (
        <>
            <input
              value = {field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            <p>Enter your first name</p>
            {
              field.state.meta.isValidating && (
                <p>Validationg name... </p>
              )
            }
            
          </>
        )}
      />
    </>
  )
}

export default App
