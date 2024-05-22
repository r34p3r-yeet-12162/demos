function Add(a, b) {
  //
  if (typeof a === "number" && typeof b === "number") return a + b;
  return new Error("invalid types");
}
function Subtract(a, b) {
  //
  if (typeof a === "number" && typeof b === "number") return a - b;
  return new Error("invalid types");
}
//module.exports.Add = Add;
module.exports.arithmetic = { Add, Subtract };
