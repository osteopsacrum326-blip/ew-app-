const C='ew-v1',A=['./','index.html','config.js','manifest.webmanifest','logo.png','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
self.addEventListener('fetch',e=>{
 const u=new URL(e.request.url),ok=u.origin===location.origin||u.hostname==='www.gstatic.com'||u.hostname==='cdnjs.cloudflare.com';
 if(e.request.method!=='GET'||!ok)return;
 e.respondWith(fetch(e.request).then(r=>{const k=r.clone();caches.open(C).then(c=>c.put(e.request,k));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html'))));
});
