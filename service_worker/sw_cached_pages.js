
const cacheName = "v1"
const cacheAssets = [
  './index.html',
  './about.html',
  './style.css',
  './index.js'
]
// Call Install Event 
self.addEventListener("install", (e) =>{
  console.log("Service worker : Installed")

  e.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        console.log(`Service Worker: Caching Files`)
        return cache.addAll(cacheAssets)
      })
      .then(() => self.skipWaiting())
  )
})

// Call activate event 
self.addEventListener("activate", (e) =>{
  console.log("Service worker: Activated")
  // Remove unwanted Caches 
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if(cache != cacheName){
            console.log("Service Worker: Clearing old Cache ")
            return caches.delete(cache)
          }
        })
      )
    })
  )
})


// Call Fetch Event 
self.addEventListener("fetch", e => {
  console.log(`Service worker: Fetching`)
  e.respondWith(
    fetch(e.request)
      .catch(() => {
        caches.match(e.request)
      })
  )
})
