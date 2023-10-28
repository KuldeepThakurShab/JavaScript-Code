//for of

//["", "", ""]
//[{}, {}, {}]

// const arr=[1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

const greeting="hello world";

for(const greet of greeting){
    if(greet === " "){
        continue;
    }
    // console.log(`Each char is ${greet}`);
}

//Maps

const map =new Map()

map.set('IN', "INDIA");
map.set('USA', "United States Of America");
map.set('Fr', "France");

// console.log(map)

for (const [key,value] of map) {
    // console.log(key, ':-', value);
}

const myObject ={
    'game1': 'NFS',
    'game2': 'Spiderman'
}
// TypeError: myObject is not iterable
// for (const [key,value] of myObject) {
//     console.log(key, ':-', value);
// }