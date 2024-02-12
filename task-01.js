const arr1 = [2200, 34000, 1200];
const arr2 = [120000, 34000, 7000];
const arr3 = [1100, 56000, 2700];
const allValues = [...arr1, ...arr2, ...arr3];
const minValue = Math.min(...allValues);
const maxValue = Math.max(...allValues);

console.log("Найменше значення: " + minValue);
console.log("Найбільше значення: " + maxValue);
