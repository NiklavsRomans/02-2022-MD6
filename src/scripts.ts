const sum = (a: number, b: number): number => {
  return a + b;
};

console.log(sum(1, 2));
console.log(sum(1, 10));
console.log(sum(99, 1));

console.log("-------------------------------------------");

const checkValue = (
  input: number | boolean | object | string
): number | boolean | object | string => {
  return typeof input;
};

console.log(checkValue(1));
console.log(checkValue(false));
console.log(checkValue({}));
console.log(checkValue(null));
console.log(checkValue("string"));
console.log(checkValue(["array"]));

console.log("-------------------------------------------");

const sameType = (a: number | string, b: number | string): boolean => {
  const checkValues = a === b && typeof a === typeof b;
  return checkValues;
};

console.log(sameType(2, 3));
console.log(sameType(3, 3));
console.log(sameType(1, "1"));
console.log(sameType("10", "10"));

console.log("-------------------------------------------");

const checkIndex = (a: string, n: number): string => {
  return a[n - 1];
};

console.log(checkIndex("abcd", 1));
console.log(checkIndex("zyxbwpl", 5));
console.log(checkIndex("gfedcba", 3));

console.log("-------------------------------------------");

const slice = (a: string): string => {
  return a.slice(3);
};

console.log(slice("abcdefg"));
console.log(slice("1234"));
console.log(slice("fgedcba"));

console.log("-------------------------------------------");

const sliceReverse = (str: string): string => {
  return str.slice(-3);
};

console.log(sliceReverse("abcdefg"));
console.log(sliceReverse("1234"));
console.log(sliceReverse("fgedcba"));

console.log("-------------------------------------------");

const sliceFirstThree = (str: string): string => {
  return str.slice(0, 3);
};

console.log(sliceFirstThree("abcdefg"));
console.log(sliceFirstThree("1234"));
console.log(sliceFirstThree("fgedcba"));

console.log("-------------------------------------------");

const halfString = (str: string): string => {
  const strLength = str.length / 2;
  return str.slice(0, strLength);
};

console.log(halfString("abcdefgh"));
console.log(halfString("1234"));
console.log(halfString("gedcba"));

console.log("-------------------------------------------");

const removeLastThree = (str: string): string => {
  return str.slice(0, -3);
};

console.log(removeLastThree("abcdefg"));
console.log(removeLastThree("1234"));
console.log(removeLastThree("fgedcba"));

console.log("-------------------------------------------");

const percentegeOfNum = (a: number, b: number): number => {
  return (a * b) / 100;
};

console.log(percentegeOfNum(100, 50));
console.log(percentegeOfNum(10, 1));
console.log(percentegeOfNum(500, 25));

console.log("-------------------------------------------");

const numCalc = (
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number
): number => {
  const sum = a + b;
  const substract = sum - c;
  const multiply = (substract * d) / e;
  const result = Math.pow(multiply, f);
  return result;
};

console.log(numCalc(6, 5, 4, 3, 2, 1));
console.log(numCalc(6, 2, 1, 4, 2, 3));
console.log(numCalc(2, 3, 6, 4, 2, 3));

console.log("-------------------------------------------");

const isEven = (num: number): boolean => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

console.log(isEven(10));
console.log(isEven(-4));
console.log(isEven(5));
console.log(isEven(-111));

console.log("-------------------------------------------");

const countLetter = (letter: string, sentence: string): number => {
  let count = 0;

  const splitted = sentence.split("");
  for (let i = 0; i < splitted.length; i++) {
    if (letter === splitted[i]) {
      count++;
    }
  }
  return count;
};

console.log(
  countLetter("m", "how many times does the character occur in this sentence?")
);
console.log(
  countLetter("h", "how many times does the character occur in this sentence?")
);
console.log(
  countLetter("?", "how many times does the character occur in this sentence?")
);
console.log(
  countLetter("z", "how many times does the character occur in this sentence?")
);

console.log("-------------------------------------------");

const checkInteger = (a: number): boolean => {
  return Number.isInteger(a);
};

console.log(checkInteger(4));
console.log(checkInteger(1.123));
console.log(checkInteger(1048));
console.log(checkInteger(10.48));

console.log("-------------------------------------------");

const calcNums = (a: number, b: number): number => {
  if (a < b) {
    return a / b;
  } else {
    return a * b;
  }
};

console.log(calcNums(10, 100));
console.log(calcNums(90, 45));
console.log(calcNums(8, 20));
console.log(calcNums(2, 0.5));

console.log("-------------------------------------------");

const appendContent = (a: string, b: string): string => {
  const splittedA = a.split("");
  if (splittedA.includes(b)) {
    splittedA.unshift(b);
    return splittedA.join("");
  } else {
    splittedA.push(b);
    return splittedA.join("");
  }
};

console.log(appendContent("cheese", "cake"));
console.log(appendContent("lips", "s"));
console.log(appendContent("Java", "script"));
console.log(appendContent(" think, therefore I am", "I"));

console.log("-------------------------------------------");

const roundNum = (a: number): number => {
  return parseFloat(a.toFixed(2));
};

console.log(roundNum(2.12397));
console.log(roundNum(3.136));
console.log(roundNum(1.12397));
console.log(roundNum(26.1379));

console.log("-------------------------------------------");

const numsToArray = (a: number): number[] => {
  const numsToArray = a.toString().split("").map(Number);
  return numsToArray;
};

console.log(numsToArray(10));
console.log(numsToArray(931));
console.log(numsToArray(193278));

console.log("-------------------------------------------");

const cleanString = (str1: string, str2: string): string => {
  const cleanStr2 = str2.split("").reverse().join("").replace("%", "");
  const cleanStr1 = str1.replace("%", "");
  const addStr = cleanStr1 + cleanStr2;
  const capitalizeWord = addStr.charAt(0).toUpperCase() + addStr.slice(1);
  return capitalizeWord;
};

console.log(cleanString("java", "tpi%rcs"));
console.log(cleanString("c%ountry", "edis"));
console.log(cleanString("down", "nw%ot"));

console.log("-------------------------------------------");

const primeNum = (a: number): number => {
  return;
};

console.log("-------------------------------------------");

const checkDivide = (x: number, y: number): number => {
  if (x % y === 0) {
    return x;
  } else {
    for (let i = x; i < x + y; i++) {
      if (i % y === 0) {
        return i;
      }
    }
  }
};
console.log(checkDivide(1, 23));
console.log(checkDivide(23, 23));
console.log(checkDivide(7, 3));
console.log(checkDivide(-5, 7));

console.log("-------------------------------------------");

const insertAfter = (a: string, b: string): string => {
  return a.replace(/(?=(...)+$)/g, b);
};
console.log(insertAfter("1234567", "."));
console.log(insertAfter("abcde", "$"));
console.log(insertAfter("zxyzxyzxyzxyzxyz", "w"));

console.log("-------------------------------------------");

const nextLetter = (a: string): string => {
  return a.replace(/[a-z]/g, function (x) {
    return String.fromCharCode(x.charCodeAt(0) + 1);
  });
};

console.log(nextLetter("bnchmf"));
console.log(nextLetter("bgddrd"));
console.log(nextLetter("sdrshmf"));

console.log("-------------------------------------------");

const nthOfArr = (a: number[], n: number): number => {
  return a[n - 1];
};

console.log(nthOfArr([1, 2, 3, 4, 5], 3));
console.log(nthOfArr([10, 9, 8, 7, 6], 5));
console.log(nthOfArr([7, 2, 1, 6, 3], 1));

console.log("-------------------------------------------");

const removeFromArr = (a: number[]) => {
  return a.splice(3);
};

console.log(removeFromArr([1, 2, 3, 4]));
console.log(removeFromArr([5, 4, 3, 2, 1, 0]));
console.log(removeFromArr([99, 1, 1]));

console.log("-------------------------------------------");

const lastThree = (a: number[]) => {
  return a.slice(-3);
};

console.log(lastThree([1, 2, 3, 4]));
console.log(lastThree([5, 4, 3, 2, 1, 0]));
console.log(lastThree([99, 1, 1]));

console.log("-------------------------------------------");

const firstThree = (a: number[]) => {
  return a.slice(0, 3);
};

console.log(firstThree([1, 2, 3, 4]));
console.log(firstThree([5, 4, 3, 2, 1, 0]));
console.log(firstThree([99, 1, 1]));

console.log("-------------------------------------------");

const removeThreeFromArr = (a: number[], n: number) => {
  return a.slice(-n);
};

console.log(removeThreeFromArr([1, 2, 3, 4, 5], 2));
console.log(removeThreeFromArr([1, 2, 3], 6));
console.log(removeThreeFromArr([1, 2, 3, 4, 5, 6, 7, 8], 3));

console.log("-------------------------------------------");

const filterArr = (a: any[], b: number | boolean | string): number[] => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b) {
      a.splice(a.indexOf(b), 1);
    }
  }
  return a;
};

console.log(filterArr([1, 2, 3], 2));
console.log(filterArr([1, 2, "2"], "2"));
console.log(filterArr([false, "2", 1], false));
console.log(filterArr([1, 2, "2", 1], 1));

console.log("-------------------------------------------");

const countArrLength = (a: number[]): number => {
  return a.length;
};

console.log(countArrLength([1, 2, 2, 4]));
console.log(countArrLength([9, 9, 9]));
console.log(countArrLength([4, 3, 2, 1, 0]));

console.log("-------------------------------------------");

const countNegative = (a: number[]) => {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] < 0) {
      count++;
    }
  }
  return count;
};

console.log(countNegative([1, -2, 2, -4]));
console.log(countNegative([0, 9, 1]));
console.log(countNegative([4, -3, 2, 1, 0]));

console.log("-------------------------------------------");

const descentingArr = (a: number[]): number[] => {
  const sortedNums = a.sort((a, b) => a - b).reverse();
  return sortedNums;
};

console.log(descentingArr([3, 2, 1]));
console.log(descentingArr([4, 2, 3, 1]));

console.log("-------------------------------------------");

const sortedArr = (a: string[]): string[] => {
  return a.sort();
};

console.log(sortedArr(["b", "c", "d", "a"]));
console.log(sortedArr(["z", "c", "d", "a", "y", "a", "w"]));

console.log("-------------------------------------------");

const avgNums = (a: number[]): number => {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum / a.length;
};

console.log(avgNums([10, 100, 40]));
console.log(avgNums([10, 100, 1000]));
console.log(avgNums([-50, 0, 50, 200]));

console.log("-------------------------------------------");

const longestWord = (a: string[]): string => {
  const splitted = a.join(" ").split(" ");
  let longest = splitted[0];
  splitted.forEach((word) => {
    if (word.length > longest.length) [(longest = word)];
  });
  return longest;
};

console.log(longestWord(["help", "me"]));
console.log(longestWord(["I", "need", "candy"]));

console.log("-------------------------------------------");

const sameArr = (a: any[]): boolean => {
  const checkArr = a.every((el) => el === a[0]);
  return checkArr;
};

console.log(sameArr([true, true, true, true]));
console.log(sameArr(["test", "test", "test"]));
console.log(sameArr([1, 1, 1, 2]));
console.log(sameArr(["10", 10, 10, 10]));

console.log("-------------------------------------------");

const openArrays = (a: number[] | string[], b: number[]): any[] => {
  const combineArr = [];
  combineArr.push(...a, ...b);
  return combineArr;
};

const openArrays2 = (a: boolean[], b: number[], c: string[]) => {
  const combArr = [];
  combArr.push(...a, ...b, ...c);
  return combArr;
};
console.log(openArrays([1, 2, 3], [4, 5, 6]));
console.log(openArrays(["a", "b", "c"], [4, 5, 6]));
console.log(openArrays2([true, true], [1, 2], ["a", "b"]));

console.log("-------------------------------------------");

// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array PAGE 17

const sorterObjValue = (a: any[]) => {
  const reversedObj = a.reverse();
  const sorted = reversedObj.sort((a, b) => a - b);
  return sorted;
};

console.log(
  sorterObjValue([
    { a: 1, b: 2 },
    { a: 5, b: 4 },
  ])
);

console.log(
  sorterObjValue([
    { a: 2, b: 10 },
    { a: 5, b: 4 },
  ])
);
console.log("-------------------------------------------");

/////////////////////////////////////////////////////////////////////////////////

// SPREAD OPERATORS //

console.log("Spread Operators");
const spreadArr = (a: number[], b: number[]): number[] => {
  return [...a, ...b];
};

console.log(spreadArr([1, 2], [3, 4]));
console.log(spreadArr([1, 2], [3, 4, 5, 6]));

console.log("-------------------------------------------");

const spreadArrStr = (a: string[], b: string): string[] => {
  return [...a, b];
};

console.log(spreadArrStr(["Apple", "Orange", "Banana"], "Kiwi"));

console.log("-------------------------------------------");

const spreadArrStrFirst = (a: string[], b: string): string[] => {
  return [b, ...a];
};

console.log(spreadArrStrFirst(["Apple", "Orange", "Banana"], "Kiwi"));

console.log("-------------------------------------------");

const spreadObj = (a: object, b: object): object => {
  return { ...a, ...b };
};

console.log(spreadObj({ a: 1, b: 2 }, { c: 3, d: 4 }));
console.log(spreadObj({ a: 1, b: 2 }, { c: 3, d: 4, e: 5, f: 6 }));

console.log("-------------------------------------------");

const spreadAndAdd = (a: object, favoriteMovie: string) => {
  return { ...a, favoriteMovie };
};

console.log(spreadAndAdd({ eyeColor: "green", age: 10 }, "Garfield"));
console.log(spreadAndAdd({ eyeColor: "blue", age: 15 }, "Twilight"));

/////////////////////////////////////////////////////////////////////////////////

// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array
// PAGE 17

const removeDuplicates = (a: number[], b: number[]): number[] => {
  let uniqArr: number[] = [];
  const spreadArr = [...a, ...b];
  spreadArr.forEach((num) => {
    if (!uniqArr.includes(num)) {
      uniqArr.push(num);
    }
  });
  return uniqArr.sort((a, b) => a - b);
};

console.log(removeDuplicates([1, 2, 3], [3, 4, 5]));
console.log(removeDuplicates([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));

console.log("-------------------------------------------");

const sumArr = (a: number[], b: number): number => {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b) {
      sum = sum + a[i];
    }
  }
  return sum;
};

console.log(sumArr([1, 2, 3, 4, 5, 6, 7], 2));
console.log(sumArr([-10, -11, -3, 1, -4], -3));
console.log(sumArr([78, 99, 100, 101, 401], 99));

console.log("-------------------------------------------");

const minMax = (min: number, max: number): number[] => {
  let sum: number[] = [];
  for (let i = min; i <= max; i++) {
    sum.push(i);
  }
  return sum;
};

console.log(minMax(2, 10));
console.log(minMax(1, 3));
console.log(minMax(-5, 5));
console.log(minMax(2, 7));

console.log("-------------------------------------------");

function groupByLetter(arr: any[]) {
  return arr.reduce((store, word) => {
    const letter = word.charAt(0);
    const keyStore = store[letter] || (store[letter] = []);
    keyStore.push(word);

    return store;
  }, {});
}

console.log(groupByLetter(["Alf", "Alice", "Ben"]));
console.log(groupByLetter(["Ant", "Bear", "Bird"]));
console.log(groupByLetter(["Berlin", "Paris", "Prague"]));

console.log("-------------------------------------------");

const arbitraryArr = (a: any[], b: number) => {
  const firstChar = b < 6 ? 0 : b;
  let newArr = [firstChar, ...a];
  return newArr;
};

console.log(arbitraryArr([1, 2, 3], 6));
console.log(arbitraryArr(["a", "b"], 2));
console.log(arbitraryArr([null, false], 11));

console.log("-------------------------------------------");

const everyNth = (a: number[], b: number): number[] => {
  return a.filter((e, i) => i % b === b - 1);
};

console.log(everyNth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(everyNth([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5));
console.log(everyNth([7, 2, 1, 6, 3, 4, 5, 8, 9, 10], 2));

console.log("-------------------------------------------");

const returnKeyValue = (a: { country: string; continent: string }): string => {
  return a.country;
};

console.log(returnKeyValue({ continent: "Asia", country: "Japan" }));
console.log(returnKeyValue({ country: "Sweden", continent: "Europe" }));

console.log("-------------------------------------------");

const getProp = (a: { [key: string]: string | number }) => {
  return a["prop-2"];
};

console.log(getProp({ one: 1, "prop-2": 2 }));
console.log(getProp({ "prop-2": "two", prop: "test" }));

console.log("-------------------------------------------");

const returnProp = (a: { [key: string]: string }, b: string): string => {
  return a[b];
};

console.log(returnProp({ continent: "Asia", country: "Japan" }, "continent"));
console.log(returnProp({ country: "Sweden", continent: "Europe" }, "country"));

console.log("-------------------------------------------");

const hasProp = (a: { [key: string]: string | number }, b: string): boolean => {
  return a.hasOwnProperty(b);
};

console.log(hasProp({ a: 1, b: 2, c: 3 }, "b"));
console.log(hasProp({ x: "a", y: "b", z: "c" }, "a"));
console.log(hasProp({ x: "a", y: "b", z: "c" }, "z"));

console.log("-------------------------------------------");

const createObj = (a: string): { [key: string]: string } => {
  return { key: a };
};

console.log(createObj("a"));
console.log(createObj("z"));
console.log(createObj("b"));

console.log("-------------------------------------------");

const creatNewObj = (a: string, b: string): object => {
  return { [a]: b };
};
console.log(creatNewObj("a", "b"));
console.log(creatNewObj("z", "x"));
console.log(creatNewObj("b", "w"));

console.log("-------------------------------------------");

// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

const arrToObj = (a: any[], b: any[]) => {
  return a.reduce((acc, curr, i) => {
    acc[curr] = b[i];
    return acc;
  }, {});
};

console.log(arrToObj(["a", "b", "c"], [1, 2, 3]));
console.log(arrToObj(["w", "x", "y", "z"], [10, 9, 5, 2]));
console.log(arrToObj([1, "b"], ["a", 2]));

console.log("-------------------------------------------");

// Write a function that takes an object (a) as argument
// Return an array with all object keys

const getKeys = (a: { [key: string]: string | number }): string[] => {
  return Object.keys(a);
};

console.log(getKeys({ a: 1, b: 2, c: 3 }));
console.log(getKeys({ j: 9, i: 2, x: 3, z: 4 }));
console.log(getKeys({ w: 15, x: 22, y: 13 }));

console.log("-------------------------------------------");

// Write a function that takes an object (a) as argument
// Return the sum of all object values

const sumObject = (a: { [key: string]: number }): number | number[] => {
  return Object.values(a).reduce((acc, curr) => acc + curr, 0);
};

console.log(sumObject({ a: 1, b: 2, c: 3 }));
console.log(sumObject({ j: 9, i: 2, x: 3, z: 4 }));
console.log(sumObject({ w: 15, x: 22, y: 13 }));

console.log("-------------------------------------------");

// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

const removeFromArg = (a: {
  [key: string]: string | number;
}): { [key: string]: string | number } => {
  return Object.fromEntries(Object.entries(a).filter(([key]) => key !== "b"));
};

console.log(removeFromArg({ a: 1, b: 7, c: 3 }));
console.log(removeFromArg({ b: 0, a: 7, d: 8 }));
console.log(removeFromArg({ e: 6, f: 4, b: 5, a: 3 }));

console.log("-------------------------------------------");

// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

const mergeObj = (
  a: { [key: string]: string | number },
  b: { [key: string]: string | number }
): { [key: string]: string | number } => {
  a.d = b.b;
  delete b.b;
  let newObj = Object.assign({}, a, b);
  return newObj;
};

console.log(mergeObj({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));
console.log(mergeObj({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));

console.log("-------------------------------------------");

// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

const multiplyObj = (a: { [key: string]: number }, b: number) => {
  return Object.fromEntries(
    Object.entries(a).map(([key, value]) => [key, value * b])
  );
};

console.log(multiplyObj({ a: 1, b: 2, c: 3 }, 3));
console.log(multiplyObj({ j: 9, i: 2, x: 3, z: 4 }, 10));
console.log(multiplyObj({ w: 15, x: 22, y: 13 }, 6));

console.log("-------------------------------------------");

// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

const swapObject = (a: {
  [key: string]: string | number;
}): { [key: string]: string | number } => {
  return Object.fromEntries(
    Object.entries(a).map(([key, value]) => [value, key])
  );
};

console.log(swapObject({ z: "a", y: "b", x: "c", w: "d" }));
console.log(swapObject({ 2: "a", 4: "b", 6: "c", 8: "d" }));
console.log(swapObject({ a: 1, z: 24 }));

console.log("-------------------------------------------");

// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

const replaceEmpty = (a: {
  [key: string]: any;
}): { [key: string]: string | number } => {
  return Object.fromEntries(
    Object.entries(a).map(([key, value]) => {
      if (value.trim() === "") {
        return [key, null];
      } else {
        return [key, value];
      }
    })
  );
};

console.log(replaceEmpty({ a: "a", b: "b", c: "" }));
console.log(replaceEmpty({ a: "a", b: "b", c: "" }));
console.log(replaceEmpty({ a: "a", b: "b", c: "" }));

console.log("-------------------------------------------");

// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

const extractInfo = (a: { [key: string]: any }): { [key: string]: string } => {
  let newObj = Object.fromEntries(
    Object.entries(a).filter(
      ([key]) =>
        key === "fn" || key === "ln" || key === "size" || key === "weight"
    )
  );
  if (newObj.size) {
    newObj.size = newObj.size + "cm";
  }
  if (newObj.weight) {
    newObj.weight = newObj.weight + "kg";
  }
  return newObj;
};

console.log(
  extractInfo({ fn: "Lisa", ln: "Müller", age: 17, size: 175, weight: 67 })
);

console.log(
  extractInfo({
    fn: "Martin",
    ln: "Harper",
    age: 26,
    email: "martin.harper@test.de",
    weight: 102,
  })
);

console.log(
  extractInfo({ fn: "Andrew", ln: "Harper", age: 81, size: 175, weight: 71 })
);

console.log(
  extractInfo({
    fn: "Matthew",
    ln: "Müller",
    age: 19,
    email: "matthew@mueller.de",
  })
);

console.log("-------------------------------------------");

// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tip: try not to mutate the original array

const addContinent = (a: object[], b: string): object[] => {
  return a.map((obj) => {
    return { ...obj, continent: b };
  });
};

console.log(
  addContinent(
    [
      { city: "Tokyo", country: "Japan" },
      { city: "Bangkok", country: "Thailand" },
    ],
    "Asia"
  )
);

console.log(
  addContinent(
    [
      { city: "Stockholm", country: "Sweden" },
      { city: "Paris", country: "France" },
    ],
    "Europe"
  )
);

console.log("-------------------------------------------");

// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array

const arrConvertObj = (a: any[]): { [key: number]: number } => {
  return a.reduce((acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc), {});
};

console.log(arrConvertObj([1, 2, 2, 3]));
console.log(arrConvertObj([9, 9, 9, 99]));
console.log(arrConvertObj([4, 3, 2, 1]));

console.log("-------------------------------------------");

// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise

const checkDates = (a: Date, b: Date): boolean => {
  return a.getTime() === b.getTime();
};

console.log(
  checkDates(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00"))
);

console.log(
  checkDates(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:00:00"))
);

console.log(
  checkDates(new Date("2001/01/01 08:00:00"), new Date("2000/01/01 08:00:00"))
);

console.log("-------------------------------------------");

// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

const dayLies = (a: Date, b: Date): number => {
  return Math.floor(a.getTime() - b.getTime()) / (1000 * 3600 * 24);
};

console.log(dayLies(new Date("2020-06-11"), new Date("2020-06-01")));
console.log(dayLies(new Date("2000-01-01"), new Date("2020-06-01")));

console.log("-------------------------------------------");

// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

const checkDateDay = (a: Date, b: Date): boolean => {
  return a.getDay() === b.getDay();
};

console.log(checkDateDay(new Date("2000/01/01"), new Date("2000/01/01")));
console.log(checkDateDay(new Date("2000/01/01"), new Date("2000/01/02")));
console.log(checkDateDay(new Date("2001/01/01"), new Date("2000/01/01")));
console.log(checkDateDay(new Date("2000/11/01"), new Date("2000/01/01")));

console.log("-------------------------------------------");
console.log("-------------------------------------------");
console.log("-------------------------------------------");
