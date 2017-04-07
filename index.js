// Dependencies
const express = require('express');

// Dependecy init
const server = express();

// Try to parse the 3rd and 4th argument as ints
const parsedArg3 = parseInt(process.argv[2]);
const parsedArg4 = parseInt(process.argv[3]);

// Assign either parsedArg3/parsedArg4 OR a default
const port = parsedArg3 > 0 ? parsedArg3 : parsedArg4 ? parsedArg4 : 3333;

// Find out whether a public path (string) has been given using the parsedArg3
// and parsedArg4 again
const publicPath = ((publicPath) => {
  if (parsedArg4.toString === 'NaN' && process.argv[3])
    publicPath = publicPath + process.argv[3];
  else if (parsedArg3.toString() !== 'NaN' && process.argv[3])
    publicPath = publicPath + process.argv[3];
  else if (parsedArg3.toString() === 'NaN' && process.argv[2])
    publicPath = publicPath + process.argv[2];
  return publicPath;
})(__dirname);

// Middleware
server.use(express.static(publicPath));

// Start listening
server.listen(port);
console.log(`Server listening on port ${port}`);
console.log(`Public path: ${publicPath}`);