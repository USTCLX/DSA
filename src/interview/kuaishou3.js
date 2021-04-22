Function.prototype.a = () => console.log(1);
Object.prototype.b = () => console.log(2);

// a._proto_ = A.prototype
// A.prototype._proto = Object.prototype

// A._proto = Function.prototype
// Function.prototype._proto = Object.prototype

function A() {}
const a = new A();
A.a();
a.b();
