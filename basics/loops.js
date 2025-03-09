const someArr = ["qweqw", "ewrwerwer", "qweqwerwer"];

console.log(`Array has ${someArr.length} elements`);

for (let i = 0; i < someArr.length; i++) {
  console.log(`Array item [${i}] = ${someArr[i]}`);
}

console.log("\nfor in someArr: ");

for (let itemIdx in someArr) {
  console.log(someArr[itemIdx]);
}

console.log("\nfor of someArr: ");

for (let item of someArr) {
  console.log(item);
}

console.log("\nwhile someArr: ");
var i = 0;
while (i < someArr.length) {
  console.log(someArr[i]);
  i++;
}

console.log("\ndo while someArr: ");
var i = 0;
do {
  console.log(someArr[i]);
  i++;
} while (i < someArr.length);
