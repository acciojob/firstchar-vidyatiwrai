function firstChar(str) {
// Remove leading and trailing spaces
str = str.trim();

// Check if the string is empty after removing spaces
if (str === '') {
return '';
}

// Loop through the string and return the first non-space character
for (let i = 0; i < str.length; i++) {
if (str[i] !== ' ') {
return str[i];
}
}
}
// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
