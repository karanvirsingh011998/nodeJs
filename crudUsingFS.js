const path = require("path");
const fs = require("fs");
const dirPath = path.join(__dirname, "crud");

//create
// fs.writeFileSync(`${dirPath}/apple.txt`, "helloo");
// //read
// fs.readFile(`${dirPath}/apple.txt`, "utf8", (err, item) => {
//   console.log("files", item);
// });
// //update
// fs.appendFile(`${dirPath}/apple.txt`, " hello world", (err) => {
//   if (!err) console.log("file updated");
// });

// delete
// fs.unlinkSync(`${dirPath}/fruit.txt`);

//rename a file
// fs.rename(`${dirPath}/apple.txt`, `${dirPath}/fruit.txt`, (err) => {
//   if (!err) console.log("file name changed");
// });
