self.addEventListener('install', (event) => {  
    let urlsToCache = [
		'/',
		'js/dbhelper.js',
		'js/main.js',
		'js/restaurant_info.js',
		'css/responsive-index.css',
		'css/responsive-restaurant.css',
		'css/styles.css',
		'img/1.jpg',
		'img/2.jpg',
		'img/3.jpg',
		'img/4.jpg',
		'img/5.jpg',
		'img/6.jpg',
		'img/7.jpg',
		'img/8.jpg',
		'img/9.jpg',
		'img/10.jpg',
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
