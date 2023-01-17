const array = ["apple", "oranges", " ", "mango", " ", "lemon"];

const array1 = array.map((val) => {
  if (val == " ") {
    return "empty string";
  }
  else return val;
});
console.log(array1);
