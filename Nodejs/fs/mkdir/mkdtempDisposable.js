import fs from "node:fs"

fs.mkdtempDisposableSync("temp-", (err,disposable) =>{
 
  console.log(disposable.path);

  disposable.dispose();  

})
