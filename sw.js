var calc_cache = [
    'index.html',
    'script.js',
    'CSS/style.css',
    'sw.js',
    'Images/logo.png',
    'Images/logo144.png',
    'Images/logo512.png',
    'Images/logo44.png',
    'Images/logo192.png'
]

self.addEventListener('install', e =>{
    console.log("Installed!")
    e.waitUntil(
        caches.open("calculator-cache").then(cache =>{
            return cache.addAll(calc_cache)
        })
    )
})


self.addEventListener('fetch', e => {
    console.log(`Initiating fetch request for: ${e.request.url} `)
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
})
