# Web Worker API

The Web Worker API is a simple means for web content to run scripts in background threads. Once created, a worker can send messages to the JavaScript code that created it by posting messages to an event handler specified by that code (and vice versa).

## Usage

### Creating a Worker

```javascript
// Create a new worker
const worker = new Worker("worker.js");
```

### Sending and Receiving Messages

```javascript
// Send a message to the worker
worker.postMessage("Hello, worker!");

// Receive a message from the worker
worker.onmessage = (event) => {
 console.log(event.data);
};
```

### Killing a Worker

```javascript
// Terminate the worker
worker.terminate();
```

## Browser Support

The Web Worker API is supported in all modern browsers.

| Chrome | Firefox | Safari | Edge | Opera |
| ------ | ------- | ------ | ---- | ----- |
| 4+     | 3.5+    | 4+     | 12+  | 11.5+ |
