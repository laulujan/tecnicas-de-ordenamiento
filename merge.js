const a = [1, 5, 2, 8, 4, -2, 6];

function merge(a){
    if( a.length === 1){
        return a
    }
    let redond = Math.floor(a.length/2);
    let aD = a.slice(0, redond);
    let aI = a.slice(redond);

    let DO = merge(aD);
    let IO = merge(aI);
    let nuevo= [];

    while((DO.length > 0)&&(IO.length > 0)){
        if(IO[0]>DO[0]){
            nuevo.push(DO[0]);
            DO.shift();
        }else{
            nuevo.push(IO[0]);
            IO.shift();
        }
    }
    return nuevo = [...nuevo,...DO,...IO]
}

console.log(merge(a));

//SHELL SORT
function shellSort(array) {
  let size = array.length;
  let gapSize = Math.floor((size) / 2);
  while (gapSize > 0) {
      ////////////////////////////////
    for(h=0; h < gapSize ; h++){
      for (i = gapSize; i < size; i = gapSize + i) {
        let temp = array[i];
        for (j = i - gapSize; j >= 0 && array[j] > temp; j = j - gapSize) {
          array[j + gapSize] = array[j];
        }
        array[j + gapSize] = temp;
      }
    }
      ///////////////////////////////
      gapSize = Math.floor(gapSize/2) 
  }
  return array;
};
console.log(shellSort([3,4,0,-1,1,-4,7,9,3]));

//HEAP SORT
var arrayLength;

function buildHeap(arr) {
   arrayLength = arr.length;

    for (var i = Math.floor(arrayLength / 2); i >= 0; i -= 1) {
        heapify(arr, i);
    }
}

function heapify(arr, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var largest = i;

    if (left < arrayLength && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < arrayLength && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest != i) {
        swap(arr, i, largest);
        heapify(arr, largest);
    }
}

function swap(arr, index_A, index_B) {
    var temp = arr[index_A];

    arr[index_A] = arr[index_B];
    arr[index_B] = temp;
}

function heapSort(arr) {
    buildHeap(arr);

    for (var i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i);
        arrayLength--;
        heapify(arr, 0);
    }
}

var example = [36, 9, 50, 28, -1, 2, 4, 3, 12, 6, 18, 29];
heapSort(example);
console.log(example); 