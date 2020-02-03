
// //Bubblesort
const array = [5,2,4,8];
console.log(bubbleSort(array));

function bubbleSort(array){
     for(let h=0; h<=array.length; h++){
        for(let i=0; i<=array.length; i++ ){
            if(array[i] > array[i+1]){
                let temporal = array[i];
                array[i] = array[i+1];
                array[i+1] = temporal;
            }
        }
    }   
    return array;
}

// //selection sort

const array1 = [5,2,4,8,7,3,10,6,-2,-1,0]
let menor;
let positionMin;

function selectionSort(array1){
    for(let h=0; h <= array1.length; h++){
        for(let i=h+1; i <= array1.length; i++){
            if(array1[h] > array1[i]){
                menor = array1[i];
                positionMin = i;
                let temp1 = array1[h];
                array1[h] = menor;
                array1[positionMin] = temp1;
            } 
        }
    }
    return array1;
}
console.log(selectionSort(array1))

///insertion sort
const array2 = [5,3,8,4,6,2];

function insertionSort(array2){
    const copy = [array2[0]];
    for(let i=1; i < array2.length; i++){
        if(array2[i] < copy[i -1]){
            var tempo = array2[i];
            for(let j=copy.length-1; j>=0; j--){
                if(j==0 && tempo < copy[j]){
                    copy.splice(j,0,tempo);
                    break;
                }
                if((tempo < copy[j])&&(tempo> copy[j-1])){
                    copy.splice(j,0,tempo);
                    break;
                }
            }
        }else{
            copy.push(array2[i]);
        }

    }
    return copy;
}
console.log(insertionSort(array2));

// //heap sort

// const ar = [9,5,3,10,4,2,1]

// function finMin(ar){
//     let min = num2[0];
//     for(let i= 0; i <= num2.length; i++){
//         if(min > num2[i]){
//             min = num2[i];
//         }
//     }
//     return min;
// }


//MERGE SORT
