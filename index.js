import myList from "./myList";
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayMapper = myArray.map((thisElement) => {
  return 2 * thisElement;
});
console.log(arrayMapper);
console.log(myList);
