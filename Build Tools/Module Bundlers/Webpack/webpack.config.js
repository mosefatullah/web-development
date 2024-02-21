const path = require("path");

module.exports = {
 entry: { index: path.resolve(__dirname, "newsrc", "index.js") },
 output: {
  path: path.resolve(__dirname, "newdist"),
 },
};
