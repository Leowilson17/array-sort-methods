// 13. sort()
// To display sort of the element value
let s = [21,55,13,20,19];   // return length
let store = s . sort();
console.log(store);   //return store

// 14. reverse()
//  This method used to reverse of the element value
let reverse = [20,30,201,21,"told"];
let rev = reverse.reverse();   // return length
console.log(rev);  // return rev

// 15. slice()
// This method used to cut the array element
let cut = [20,38,'Keyboard','SmartTV','CPU'];
var storing_data = cut . slice(-1);  
console.log(storing_data);   // return deleted element(index position)
var store = cut . slice(1,3); //n-1 // return deleted element (index position 1-3)
console.log(store);
console.log(cut);   // return length and remaing element

// 16. splice()
// method changes the contents of an array by removing or replacing existing elements and/or adding new element
let data = ['Train','Bus','Ship','Bike','Aeroplane'];
let value = data . splice(4,2,'Auto');     // (index value, delete count (n-1), element value);
console.log(data);   
let value_1 = data . splice (2,2); //length, delete count
console.log(value_1);  // return deleted element
let value_2 = data . splice(4,1,'Cycle');
console.log(data);  // return remaining elements

// 17. toString()
// This method returns string-type in entire array element
var array = [100,2,'Kodaikanal','Nilgris'];
var shop = array . toString();
console.log(typeof array);
console.log(shop);  // retrun  string type
console.log(array);  // return length and array 

//  18. keys()
// It returns a new Array Iterator object that contains the keys for each index position in the array.
let loop = [1,2,3,'a','B'];
let loop_data = loop . keys();    
for ( var b of loop_data)
{
    console.log(b);
}