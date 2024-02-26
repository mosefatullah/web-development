## Service Workers

Service Workers are a type of Web Worker that run in the background and can intercept network requests, cache or retrieve resources, and provide offline support. They are used to provide a better user experience by making web applications more reliable and faster.

### Usage

```javascript
// Register a service worker
if ("serviceWorker" in navigator) {
 navigator.serviceWorker
  .register("service-worker.js")
  .then((registration) => {
   // Registration was successful
   console.log("Service Worker registered with scope:", registration.scope);
  })
  .catch((error) => {
   // Registration failed
   console.error("Service Worker registration failed:", error);
  });
}
```

```javascript
// Service Worker script (service-worker.js)
self.addEventListener("install", (event) => {
 // Perform install steps
});

self.addEventListener("fetch", (event) => {
 // Intercept network requests
});

self.addEventListener("push", (event) => {
 // Handle push notifications
});
```

### Browser Support

Service Workers are supported in all modern browsers.

| Chrome | Firefox | Safari | Edge | Opera |
| ------ | ------- | ------ | ---- | ----- |
| 40+    | 44+     | 11.1   | 17+  | 27+   |
