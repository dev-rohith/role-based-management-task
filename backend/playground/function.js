// pass by value
// let n = 10; 
// function change(n){
//     console.log('inside change before update', n)
//     n = 100
//     console.log('inside change', n)
// }
// console.log('before change called', n); 
// change(n); 
// console.log('after change called', n); 

// pass by reference
const arr = [10]
function change(arr) {
    console.log('inside change before update', arr); 
    arr[0] = 100 
    console.log('inside change after update', arr); 
}
console.log('before change', arr);
change(arr);
console.log('after change', arr); 
change(arr);