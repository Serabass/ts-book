
function callbackHellExample(cb: Function) {
  fs.readFile('file.txt', function (err, data) {
      if (err) throw err;
      fs.writeFile('file.txt', '', function (err) {
          if (err) throw err;
          
          cb();
      });
  });
}