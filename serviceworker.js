self.addEventListener('install', (event) => {  
    let urlsToCache = [
		'/',
		'js/',
		'css/',
		'img/',
		'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
		'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
		'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon.png',
		'https://unpkg.com/leaflet@1.3.1/dist/images/marker-shadow.png'
    ];
	console.log('install');
	event.waitUntil(
		caches.open('v1').then(function (cache) {
		    return cache.addAll(urlsToCache)
		})
	);
});
self.addEventListener('fetch', (event) => {  
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) return response;
            return fetch(event.request);
        })
    );
});
