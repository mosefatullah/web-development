onmessage = function (e) {
 for (let i = 0; i < 100000000000000000000000000000; i++) {
  if (i % 100000000 === 0 || i % 100000000 === 1) {
   this.postMessage(i);
  }
 }
};
