const arr0 = ["one", "two", "three"];
const arr1 = new Array("one", "two", "three");

console.log("Items of arr0: ");
for (const item in arr0) {
  console.log(item);
}

console.log("Items of arr1: ");
for (const item in arr1) {
  console.log(item);
}
