const http = require("http"); 
const hostname = '127.0.0.1'
const port = 3002

function camelize(str) {
        return str
          .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
          .map(
            // capitalizes first letters of all array items except the first one
            // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
          )
          .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
        }

const server = http.createServer((req, res) => {
    res.statusCode = 200; 
    res.setHeader("Content-Type", 'text/plain');
    res.end(camelize("monkey-butt-quack-job"))
})

    server.listen(port, hostname, () => {
        console.log(`  Server running at http://${hostname}:${port}/`)
    } )

    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
          console.error(`Port ${port} is already in use.`);
        } else {
          console.error(err);
        }
      });
      