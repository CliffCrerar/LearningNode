var buffer = new ArrayBuffer(16);
var view = new Int32Array(buffer);
view[0] = 500;
view[1] = 150;
view[2] = 301;
console.log(view);