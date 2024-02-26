## Web Storage API

The Web Storage API provides mechanisms by which browsers can store key/value pairs, in a much more intuitive fashion than using cookies. The two mechanisms within Web Storage are as follows:

- **localStorage**: The localStorage object stores data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.

- **sessionStorage**: The sessionStorage object stores data for one session. The data is deleted when the user closes the specific browser tab.

### Usage

#### localStorage

```javascript
// Store data
localStorage.setItem("name", "Abdullah");

// Retrieve data
let name = localStorage.getItem("name");
```

#### sessionStorage

```javascript
// Store data
sessionStorage.setItem("name", "Abdullah");

// Retrieve data
let name = sessionStorage.getItem("name");
```

### Browser Support

The Web Storage API is supported in all modern browsers.

| Chrome | Firefox | Safari | Edge | Opera |
| ------ | ------- | ------ | ---- | ----- |
| 4+     | 3.5+    | 4+     | 10+  | 11.5+ |