console.log("start");
setTimeout(() => {
  console.log("2 sec");
}, 2000);
setTimeout(() => {
  console.log("0 sec");
}, 0);
console.log("end");
// Event Loop concept
// CallStack
// NodeApi
// EventLoop

//if callback is not empty till then thecallback quesue will not get called
