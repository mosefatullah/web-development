## Location API

The Location API is a web API that allows web applications to access the user's geographical location. It is a simple API that is part of the HTML5 standard and is implemented in most modern browsers.

### Usage

```javascript
navigator.geolocation.getCurrentPosition(success, error, options);
```

### Example

```javascript
// Get the user's location
navigator.geolocation.getCurrentPosition(
 (position) => {
  // Process the location
  processLocation(position);
 },
 (error) => {
  // Handle errors
  console.error(error);
 },
 {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
 }
);
```

### Browser Support

The Location API is supported in all modern browsers.

| Chrome | Firefox | Safari | Edge | Opera |
| ------ | ------- | ------ | ---- | ----- |
| 4+     | 2+      | 3.1+   | 12+  | 10.6+ |
