## Web Socket

WebSockets is a protocol that provides full-duplex communication channels over a single TCP connection. It is designed to be implemented in web browsers and web servers, but it can be used by any client or server application. The WebSocket protocol makes more interaction between a browser and a website possible, facilitating live content and the creation of real-time games.

### Usage
```javascript
const socket = new WebSocket("ws://localhost:8080");

socket.onopen = function (e) {
 alert("[open] Connection established");
 alert("Sending to server");
 socket.send("My name is John");
};

socket.onmessage = function (event) {
 alert(`[message] Data received from server: ${event.data}`);
};

socket.onclose = function (event) {
 if (event.wasClean) {
  alert(
   `[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`
  );
 } else {
  // e.g. server process killed or network down
  // event.code is usually 1006 in this case
  alert("[close] Connection died");
 }
};

socket.onerror = function (error) {
 alert(`[error] ${error.message}`);
};
```

### Browser Support

All modern browsers support Web Sockets.

| Chrome | Firefox | Safari | Opera  | Edge | IE  |
| ------ | ------- | ------ | ------ | ---- | --- |
| 4+     | 4+      | 5+     | 10.70+ | 12+  | 10+ |
