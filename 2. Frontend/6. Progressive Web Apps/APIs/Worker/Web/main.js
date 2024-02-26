// Simple example
const first = document.querySelector("#number1");
const second = document.querySelector("#number2");

const result = document.querySelector(".result");

if (window.Worker) {
 const myWorker = new Worker("worker1.js");

 [first, second].forEach((input) => {
  input.onchange = function () {
   myWorker.postMessage([first.value, second.value]);
   console.log("Message posted to worker");
  };
 });

 myWorker.onmessage = function (e) {
  result.textContent = e.data;
  console.log("Message received from worker");
 };
} else {
 console.log("Your browser doesn't support web workers.");
}

// Looping example

const worker = new Worker("worker2.js");

worker.postMessage("Start!");

worker.onmessage = function (e) {
 console.log(e.data);
};