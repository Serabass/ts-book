function callbackHellExample(cb: Function) {
  fs.readFile('file.txt').then(function (data) {
      fs.writeFile('file.txt', '').then(function () {

      });
  });
}