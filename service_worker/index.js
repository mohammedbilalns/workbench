// Ensure sw are supported 
if(checkServiceWorkerSupported()){
  registerServiceWorker("./sw_cached_pages.js")
}

// reigster the service worker with the browser 
function registerServiceWorker(filename){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(filename)
      .then(_reg => console.log("Service worker: Registered"))
      .catch(err => console.log(`Service worker : Error: ${err} `))
  })

}

// check weather the service worker is supported in the browser or not 
function checkServiceWorkerSupported(){

  const isSupported = navigator.serviceWorker  !== null 

  if(isSupported) console.log("Service worker supported")
    else console.log("Service worker not supported")
  return isSupported
}
