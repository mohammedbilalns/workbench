//classinc nodejs pattern 
// cb(error, result) => void

type User = {
  id: number;
  name: string;
  age: number;
  role:"user" | "admin"
}

const users: User[] = [
  {
    id: 1,
    name: "Bilal",
    age: 25,
    role: "user"
  },
  {
    id: 2,
    name: "Ahmed",
    age: 30,
    role: "admin"
  },
  {
    id: 3,
    name: "Mohammed",
    age: 35,
    role: "user"
  }
]

function fetchUserWithCB(id: number, cb : (err: Error | null,user?: User) => void) {
  setTimeout(() => {
    const user = users.find(user => user.id === id);
    if(!user){
      cb(new Error("User not found"));
    }
    cb(null, user);

  }, 500)
}

fetchUserWithCB(32, (err, user) => {
  if(err){
    console.log("Error: ", err)
    return 
  }
  console.log("User: ", user)
})


function fetchUserWPromise(userId: number): Promise<User> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const user = users.find(user => user.id === userId);
      if(!user){
        rej(new Error("User not found"));
        return 
      }
      res(user);
    }, 1000)
  })
}

fetchUserWPromise(32).then(user => {
  console.log("User: ", user)
}).catch(err => {
    console.error("Error: ", err)
  })
