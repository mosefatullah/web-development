## Web Payment API

The Web Payment API is a web API that allows web applications to initiate and accept payments. It is a simple API that is part of the HTML5 standard and is implemented in most modern browsers.

### Usage

```javascript
// Check if the Payment Request API is available
if (window.PaymentRequest) {
 // Create a new PaymentRequest
 let request = new PaymentRequest(
  supportedPaymentMethods,
  paymentDetails,
  options
 );

 // Show the Payment Request UI
 request
  .show()
  .then((paymentResponse) => {
   // Process the payment
   processPayment(paymentResponse);
  })
  .catch((error) => {
   // Handle errors
   console.error(error);
  });
} else {
 // Fallback to traditional payment methods
 window.location.href = "/checkout";
}
```

### Example

```javascript
// Create a new PaymentRequest
let request = new PaymentRequest(
 [
  {
   supportedMethods: "basic-card",
  },
 ],
 {
  total: {
   label: "Total",
   amount: {
    currency: "USD",
    value: "10.00",
   },
  },
 },
 {
  requestPayerName: true,
  requestPayerEmail: true,
  requestPayerPhone: true,
 }
);
```

### Browser Support

The Web Payment API is supported in all modern browsers.

| Chrome | Firefox | Safari | Edge | Opera |
| ------ | ------- | ------ | ---- | ----- |
| 61+    | 55+     | 11.1+  | 15+  | 48+   |