## Device Orientation API

The Device Orientation API is a web API that provides information about the physical orientation of a device. It is a simple API that is part of the HTML5 standard and is implemented in most modern browsers.

### Usage

```javascript
// Check if the Device Orientation API is available
if (window.DeviceOrientationEvent) {
 // Add an event listener for device orientation changes
 window.addEventListener("deviceorientation", (event) => {
  // Process the device orientation data
  processDeviceOrientation(event);
 });
} else {
 // Fallback to manual orientation detection
 window.addEventListener("mousemove", (event) => {
  // Process the mouse movement data
  processMouseMovement(event);
 });
}
```

### Example

```javascript
// Process the device orientation data
function processDeviceOrientation(event) {
 // Get the device orientation data
 let alpha = event.alpha; // Z-axis rotation (0 to 360 degrees)
 let beta = event.beta; // X-axis rotation (-180 to 180 degrees)
 let gamma = event.gamma; // Y-axis rotation (-90 to 90 degrees)

 // Update the UI with the device orientation data
 updateUI(alpha, beta, gamma);
}

// Process the mouse movement data
function processMouseMovement(event) {
 // Get the mouse movement data
 let x = event.clientX; // X-coordinate
 let y = event.clientY; // Y-coordinate

 // Update the UI with the mouse movement data
 updateUI(x, y);
}
```

### Browser Support

The Device Orientation API is supported in all modern browsers.

| Chrome | Firefox | Safari  | Safari iOS | Edge | Opera |
| ------ | ------- | ------- | ---------- | ---- | ----- |
| 7+     | 6+      | &cross; | 4.2+       | 12+  | 15+   |
