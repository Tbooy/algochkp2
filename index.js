// Function to implement Insertion Sort
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // Pick the current element
    let current = arr[i];
    let j = i - 1;

    // Shift elements of arr[0..i-1], that are greater than current,
    // one position ahead of their current position
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the current element into the correct position
    arr[j + 1] = current;
  }

  return arr; // Return the sorted array
}

// Example usage
let array = [12, 11, 13, 5, 6];
console.log("Original Array:", array);

let sortedArray = insertionSort(array);
console.log("Sorted Array:", sortedArray);
