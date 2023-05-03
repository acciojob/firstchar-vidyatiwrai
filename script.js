function firstChar(text) {
  // your code here
	const str = 'abc efg';
const str2 = str.charAt(0).toUpperCase() + str.slice(1);
console.log(str2);
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
