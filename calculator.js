const connect = require('connect');
const url = require('url');
const http = require('http');

function calculate(req, res) {
    const query = url.parse(req.url, true).query;
    const method = query.method;
    const x = parseFloat(query.x);
    const y = parseFloat(query.y);
  
    let result;
    let operation;
  
    switch (method) {
      case 'add':
        result = x + y;
        operation = '+';
        break;
      case 'subtract':
        result = x - y;
        operation = '-';
        break;
      case 'multiply':
        result = x * y;
        operation = '*';
        break;
      case 'divide':
        if (y === 0) {
          res.end('Error: Division by zero is not allowed.');
          return;
        }
        result = x / y;
        operation = '/';
        break;
      default:
        res.end('Error: Invalid method. Supported methods are add, subtract, multiply, and divide.');
        return;
    }
  
    const output = `${x} ${operation} ${y} = ${result}`;
    res.end(output);
  }

  const app = connect();
app.use(calculate);

http.createServer(app).listen(3000, () => {
  console.log('Server listening on port 3000');
});