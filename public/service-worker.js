// const urlsToCache = ["/"]
// const CACHE_NAME = "cache"

// self.addEventListener('install', (event) => {
//     console.log('Inside the install handler:', event)
//     event.waitUntil(
//         caches.open(CACHE_NAME)
//         .then(cache => {
//            return cache.addAll(urlsToCache)
//         })
//         .then(() => self.skipWaiting())
//      )
//   })
  
// self.addEventListener('activate', (event) => {
//     console.log('Inside the activate handler:', event)
//     event.waitUntil(self.clients.claim())
//   })
  
// // self.addEventListener('fetch', (event) => {
// //     console.log(`fetching ${event.request.url}`)
// //     if(navigator.onLine) { 
// //         let fetchRequest = event.request.clone()
// //         return fetch(fetchRequest)
// //         .then(
// //             function (response){
// //                 if(!response || response.status != 200 ||response.type != 'basic'){
// //                     return response
// //                 }

// //                 let responseToCache = response.clone()
                
// //                 caches.open(CACHE_NAME)
// //                 .then(function(cache) {
// //                     cache.put(event.request, responseToCache)
// //                 })

// //                 return response
// //             }
// //         )
// //     } else {
// //         event.respondWith(
// //             caches.match(event.request)
// //             .then(function (response) {
// //                 if(response){
// //                     return response
// //                 }
// //             })
// //         )
// //     }
// //   })

// self.addEventListener('fetch', (event) => {
//     console.log(`fetching ${event.request.url}`);

//     // Ignore requests with unsupported schemes (chrome-extension, data, etc.)
//     if (!event.request.url.startsWith("http")) {
//         return;
//     }

//     event.respondWith(
//         fetch(event.request) // Try fetching from network first
//             .then((response) => {
//                 if (!response || response.status !== 200 || response.type !== "basic") {
//                     return response;
//                 }

//                 // Clone response before caching
//                 let responseToCache = response.clone();

//                 caches.open(CACHE_NAME).then((cache) => {
//                     cache.put(event.request, responseToCache);
//                 });

//                 return response;
//             })
//             .catch(() => caches.match(event.request)) // Fallback to cache if offline
//     );
// });

const urlsToCache = ["/"];
const CACHE_NAME = "cache";

// Install event
self.addEventListener("install", (event) => {
    console.log("Inside the install handler:", event);
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
            .catch(err => console.error("Caching failed:", err))
            .then(() => self.skipWaiting())
    );
});

// Activate event
self.addEventListener("activate", (event) => {
    console.log("Inside the activate handler:", event);
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch event
self.addEventListener("fetch", (event) => {
    console.log(`fetching ${event.request.url}`);

    // Ignore non-HTTP requests (fix for "chrome-extension" issue)
    if (!event.request.url.startsWith("http")) {
        return;
    }

    event.respondWith(
        fetch(event.request)
            .then((response) => {
                if (!response || response.status !== 200 || response.type !== "basic") {
                    return response;
                }

                let responseToCache = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseToCache);
                });

                return response;
            })
            .catch(() => caches.match(event.request)) // Offline fallback
    );
});
