const isAnagram = (string1, string2) => {
  for (let i of string1) {
    if (string1.length > string2.length || string2.length > string1.length) {
      return false;
    } else if(!string2.includes(i)) {
        return false;
    } else if (string2.includes(i)) {
        console.log(i);
    } 
  }
  return true;
}
	
console.log(isAnagram("hello", "elloh"));
console.log(isAnagram("listen", "lidfje"));
