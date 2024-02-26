## Server Sent Events (SSE)

SSE is a technology that allows a server to push updates to a client. It is a simple way to create a real-time web application where the server can push data to the client.

### Usage

To use SSE, you need to create an `EventSource` object and specify the URL of the server endpoint. The server endpoint should send the data in a specific format. The data should be sent in the form of a string and should be prefixed with `data:`. The server can also send an event name along with the data. The event name should be prefixed with `event:`. The server can also send a unique identifier for the message. The unique identifier should be prefixed with `id:`. The server can also send a retry time. The retry time should be prefixed with `retry:`.

```javascript
const eventSource = new EventSource("https://example.com/sse");

eventSource.onmessage = function (event) {
 console.log(event.data);
};

eventSource.onerror = function (event) {
 console.error("EventSource failed:", event);
};
```

```javascript
const express = require("express");
const app = express();

app.get("/sse", (req, res) => {
 res.setHeader("Content-Type", "text/event-stream");
 res.setHeader("Cache-Control", "no-cache");
 res.setHeader("Connection", "keep-alive");

 let counter = 0;

 const interval = setInterval(() => {
  res.write(`data: ${counter}\n\n`);
  counter += 1;

  if (counter === 5) {
   clearInterval(interval);
   res.end();
  }
 }, 1000);
});

app.listen(3000, () => {
 console.log("Server is running on port 3000");
});
```

### Browser Support

SSE is supported in all modern browsers. Internet Explorer does not support SSE.

| Browser | Version |
| ------- | ------- |
| Chrome  | 6.0+    |
| Firefox | 6.0+    |
| Safari  | 5.0+    |
| Opera   | 11.0+   |
| Edge    | 14.0+   |
