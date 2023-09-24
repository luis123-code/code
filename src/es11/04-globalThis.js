// En el navegador
window === globalThis // true

// En Node.js
global === globalThis // true

// en webworker
self === globalThis // true