let a = 20;
let b = 10;

let data = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(30);
  }, 2000);
});

data.then((b) => console.log(a + b));
