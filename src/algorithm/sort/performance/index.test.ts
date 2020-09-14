import bubbleSort from "../bubbleSort";
import insertSort from "../insertSort";
import selectionSort from "../selectionSort";

// insertSort, bubbleSort and selectionSort are all O(n^2)
// summarize: bubbleSort is much slower than insertSort
// insertSort : bubbleSort : selectionSort
// 4: 104 : 121
// so insertSort is much useful
describe("comparing bubbleSort and insertSort", () => {
  test("1000 arrays and each array has 2000 elements", () => {
    const arr = new Array(1000);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(200);
      for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] = Math.floor(Math.random() * 2000);
      }
    }

    let startTime = Date.now();
    arr.forEach(item => {
      bubbleSort(item);
    });
    console.log(`bubbleSort cost time is ${Date.now() - startTime}`);
    startTime = Date.now();

    arr.forEach(item => {
      insertSort(item);
    });
    console.log(`inserSort cost time is ${Date.now() - startTime}`);
    startTime = Date.now();

    arr.forEach(item => {
      selectionSort(item);
    });
    console.log(`selectionSort cost time is ${Date.now() - startTime}`);
  });
});
