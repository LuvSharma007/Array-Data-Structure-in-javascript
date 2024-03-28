//============================ linear search 
//In this, the array is traversed sequentially and every element is checked.

function linearSearch(arr,x){
    for(let i=0; i<=arr.length-1; i++){
        if(arr[i]==x){
            return i;
        }
    }return -1;
}

let arr = [2,3,4,10,40,90,56,45,87,27,80,35,74,93];
let x = 93;
console.log(linearSearch(arr,x));

//=============================== binary search
//Binary Search is used in a sorted array by repeatedly dividing the search interval in half.


//============= Iterative  Binary Search Algorithm:

let data=[10,20,30,40,50,60,70,80,90,100]; 
let find = 90
let start = 0;
let end = data.length-1;
let position = undefined;

while(start<=end){                      
    let mid =Math.floor((start+end)/2);
    if(data[mid]===find){
        position=mid;
        break;
    }else if(data[mid]>find){
        end = mid - 1 ;
    }else{
        start = mid + 1;
    };

}
console.log(position);

//==========================Recursive Binary Search Algorithm
let arr=[10,20,30,40,50,60,70,80,90,100];
let start = 0;
let end = arr.length-1;
let target = 90;

function binarySearch(target,start,end){
    if(start>end){
        return "Not found !"
    };
    const mid = Math.floor((start+end)/2);

    if(arr[mid]===target){
        return `Found it on ${mid} Index`;
    }
    if(arr[mid]>target){
        return binarySearch(target,start,mid-1);
    }
    if(arr[mid]<target){
        return binarySearch(target,mid+1,end);

    }
}
console.log(binarySearch(target,start,end));


// =======================================basic operation on arrays:
let arr=[10,20,30,40,50];
let result = arr.reverse();
console.log(result);

// ================================reverse an array using loop:

let data = [10,20,30,40,50];

for(let i=data.length-1; i>=0; i--){
    console.log(data[i]);
}

// reverse an array using recursion

let data = [10, 20, 30, 40, 50];
let temp;

function reverseArray(data,start,end) {
    console.log(data);
    if (start <= end) {
        temp = data[start];
        data[start] = data[end];
        data[end] = temp;
        reverseArray(data, start + 1, end - 1);
    }
}

// reverseArray(data,0,data.length-1);

// rotation of an array:

// rotate array one by one:

const data = [1, 2, 3, 4, 5, 6];
const d = 2;                        // how many times to rotate
const n = data.length;

function rotation(data, d, n) {
    for (let i = 0; i < d; i++) {
        console.log(data);
        const first = data.shift();
        data.push(first);
    };
};

rotation(data,d,n);
console.log(data);

//  using temporary variable:
// left rotation

const arr =[1,2,3,4,5,6];
const n = arr.length;
const d = 1;

function leftRotation(arr,n,d){
    for(let j=0; j<d; j++){
        const temp = arr[0];
        for(let i=0; i<n-1; i++){
            arr[i] = arr[i+1];
        }
        arr[n-1] = temp;
    }
}

leftRotation(arr,n,d);
console.log(arr);

// right rotation

const arr =[1,2,3,4,5,6];  
const n = arr.length;
const d = 1;

function rightRotation(arr,n,d){
    for(let j=0; j<d; j++){
        const temp = arr[n-1];
        for(let i=n-1; i>0; i--){
            arr[i] = arr[i-1];    //  For each index i, assign the value of the element at position i - 1 to the element at position i.
        }
        arr[0] = temp;
    }
}

rightRotation(arr,n,d);
console.log(arr);

// ======================================== sorting in array 

1.) Selection sort 

let data = [20,12,53,3];
function SelectionSort(data){
    for(let i=0; i<data.length; i++){
        let minId = i;                        // taking first value as minimum value
        for(let j=i+1; j<data.length; j++){   // when it finds 3 is the smallest it will swap it. 
            if(data[j]<data[minId]){          // it keep recoding the smallest value and then swap it.
                minId = j;
            }
        }
        let temp = data[minId];
        data[minId] = data[i];
        data[i] = temp;
    }
}

SelectionSort(data);
console.log(data);


2.) Bubble Sort

let data = [10,8,6,4,2,0];
let n = data.length;

function BubbleSort(data,n){
    for(let j=0; j<n-1; j++){
        for(let i=0; i<n-1-j; i++){   // 10 is placed at the last so we dont have to take it
            if(data[i]>data[i+1]){
                let temp = data[i];
                data[i] = data[i+1];
                data[i+1] = temp; 
            }
        }
    }
}

BubbleSort(data,n);
console.log(data);

// // 3.) Insertion Sort

let data = [12,11,13,5,6];
let n = data.length;

function InsertionSort(data){
    for(let i=1;i<n;i++){
        let current = data[i];
        let j = i-1;                         // beacuse we assume element is sorted
        while(j>=0 && data[j]>current){
            data[j+1] = data[j];
            j--;
        }
        data[j+1] = current;
    }
}

InsertionSort(data);
console.log(data);

// custom insertion 

let data = [15, 20, 23, 3, 9, 11, 0, 8];
let removeEle = data.splice(2,2);

function customInsert(data){
    for(let i=1; i<data.length; i++){
        let current = data[i];
        let j = i-1;
        while(j>=0 && data[j]>current){
            data[j+1]=data[j];
            j--;
        }
        data[j+1]=current;
    }
}

customInsert(data);
console.log(data.concat(removeEle));

// 4.) merge sort

// merging the sorting array:   for e.g [10,20,30,50] , [40,60,80,100]

function Merge(left,right){
    let sortedArray=[];

    while(left.length && right.length){
        if(left[0]< right[0]){
           sortedArray.push(left.shift());          // shift removes first element and return it
        }else{
            sortedArray.push(right.shift());
        }
    }
    return [...sortedArray,...left,...right];
}

let merge = Merge([2,5,9,12,17,20],[40,50,67,72,89,95])

function MergeSort(data){
    
    if(data.length<=1){
        return data;
    }
    
    let mid = Math.floor(data.length/2); // find the mid element until the length of the array is 1.
    
    let left = MergeSort(data.slice(0,mid));
    let right = MergeSort(data.slice(mid));
    
    
    return Merge(left,right);
}

const sortedArray = MergeSort([3, 63, 2, 89, 33, 5, 9]);
console.log(sortedArray);

quick sort 
1.) with buildtin functions; 

let data = [2,4,6,7,89,42,69,36,93];

function quickSort(data){
    if(data.length <=1){
        return data;
    }

    let pivot = data[0];
    let left = [];
    let right = [];

    for(let i=1; i<data.length; i++){
        if(data[i]< pivot){
            left.push(data[i]);
        }else{
            right.push(data[i]);
        }
    }

    return [...quickSort(left), pivot , ...quickSort(right)];
}

console.log(quickSort(data));

// Search, Insert, and Delete in an Unsorted Array

// search array

let data = [1,2,3,4,5,6,7,8,9,10];
let n = data.length;
let key = 8;

function searchArray(data,n,key){
    for(let i=0; i<n; i++){
        if(data[i]==key){
            return i;
        };
    }
    return -1
}

console.log(searchArray(data,n,key));

// insert 

let data=[10,20,30,40,50];
let n = data.length;
let key = 60;
let index = 4;

function insert(data,n,key,index){
    if(n>=index){
        data[index] = key;
        return 1;   // if value inserted 
    }

    return 0;   // if value not inserted 
}

console.log(insert(data,n,key,index));


// delection

let data= [10,20,30,40,50,60];
let n = data.length;
let position = 4;

function delection(data,n,position){
    for(let i=position; i<n-1; i++){
        data[i] = data[i+1];
    }
    data.length = data.length-1;    
}

delection(data,n,position);
console.log(data);

// Search, Insert, and Delete in an Sorted Array 

// search opearation 
// binary search

let data = [10,20,30,40,50,60,70,80,90,100];
let start = 0;
let end = data.length-1;
let key = 30;

function binarySearch(key,start,end){
    if(start>end){
        return "Not Found";
    }
    mid = Math.floor((start+end)/2);
    if(data[mid]===key){
        return mid;
    }
    if(data[mid]>key){
        return binarySearch(key,start,mid-1);
    }
    if(data[mid]<key){
        return binarySearch(key,mid+1,end);
    }
}

console.log(binarySearch(key,start,end));


// insertion 

let data = new Array(7);
data[0] = 10;
data[1] = 20;
data[2] = 30;
data[3] = 40;
data[4] = 50;
data[5] = 60;

let n = data.length-1;
let position = 3;
let key = 32;

function insertion(data,n,position,key){
    j = n;
    while(j>=position){
        data[j+1] = data[j];
        j--;
    }
    data[position] = key;
    n = n+1;
}

insertion(data,n,position,key)
console.log(data);

// delection

let data = [3,4,9,14,19,25,34,45,50,67,71,89,90];
let start = 0;
let end = data.length-1;
let key = 45;
let n = 12;

function binarySearch(data,key,start,end){
    if(start>end){
        return -1;
    }
    mid = Math.floor((start+end)/2);
    if(data[mid]===key){
        return mid;
    }
    if(data[mid]>key){
        return binarySearch(data,key,start,mid-1)
    }
    if(data[mid]<key){
        return binarySearch(data,key,mid+1,end);
    }    
}

function delection(data){
    let position = binarySearch(data,key,0,n-1);
    if(position == -1){
        return "position not found";
    }
    for(let i=position; i<data.length-1; i++){
        data[i] = data[i+1];
    }
    return n-1;
}

delection(data)
console.log(data);
