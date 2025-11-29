// NOTE: Utilty types
type User = {
 readonly id: string
  name: string
  age: number
  address?: {
    street: string
    city: string
  }
}
// NOTE: Omit
function createUser(user: Omit<User,"id">){} // remove id from the user type 
// NOTE: Pick
function renderUserDetails(user: Pick<User, "name"| "age">){} // only specify name age properis of user 
// NOTE: Partial
function updateUser(User: Partial<User>){} // make all the fields optional 
// NOTE: Required
function createUserWithAddress(user: Required<User>){} // make the optional address as Required
// NOTE: ReadOnly
type T = Readonly<User>
// NOTE: Record
type S = Record<"admin"|"user",{test: string}> // object wth key matching any of union types and value the obj

const a: S= {
  admin: {test:"sdf"},
  user: {test: "sdf"}
}

type Q = Record<PropertyKey, {test: string}> // object that can take any key and the value must match the obj
const b: Q ={
  s:{test:"sdf"}
}

//NOTE: Extract
type Role = "admin" | "user" | "moderator"
type OtherRole  = "testing" | "user"
type R = Extract<Role, OtherRole> // intersecting roles
// NOTE: 
