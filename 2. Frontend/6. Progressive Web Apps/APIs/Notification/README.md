## Notification API

The Notification API is a web API that allows web applications to display notifications to the user. It is a simple API that is part of the HTML5 standard and is implemented in most modern browsers.

### Usage

```javascript
// Check if the Notification API is available
if (window.Notification) {
 // Request permission to display notifications
 window.Notification.requestPermission()
  .then((permission) => {
   // Process the permission
   processPermission(permission);
  });
} else {
 // Fallback to traditional notifications
 alert("Please enable notifications in your browser settings");
}
```

### Example

```javascript
// Process the permission
function processPermission(permission) {
 // Check if the permission is granted
 if (permission === "granted") {
  // Display a notification
  displayNotification("Hello, world!");
 } else {
  // Fallback to traditional notifications
  alert("Please enable notifications in your browser settings");
 }
}

// Display a notification
function displayNotification(message) {
 // Create a new notification
 let notification = new Notification("Notification", {
  body: message,
 });
}
```

### Browser Support

The Notification API is supported in all modern browsers.

| Chrome | Firefox | Safari | Edge | Opera |
| ------ | ------- | ------ | ---- | ----- |
| 22+    | 22+     | 6+     | 22+  | 25+   |

