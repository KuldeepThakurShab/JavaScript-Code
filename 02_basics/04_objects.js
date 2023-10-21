// const tinderUser= new Object()    //singleton object 

const tinderUser={}       // non singleton object

tinderUser.id="123kadk"
tinderUser.name="Sammy"
tinderUser.isLogeedIn= false;

// console.log(tinderUser);

const regulaarUser={
    email:"samy@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Kuldeep",
            lastname:"Tomar"
        }
    }
}

// console.log(regulaarUser.fullname.userfullname.firstname);

const obj1={a:1, b:2};
const obj2={c:3, d:4};

// const obj3={obj1,obj2};
// console.log(obj1);
// const obj3= Object.assign({},obj1,obj2)

const obj3={...obj1, ...obj2};
// console.log(obj3);

//objects inside array 
const users=[
    {
        id:1,
        email:"kuldeep@gmail.com"
    },
    {
        id:2,
        email:"samy@gmail.com"
    }
]

// users[1].email 
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogeedIn'));

const course={
    coursename: "Js Language",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const{courseInstructor: instructor}=course;

// console.log(courseInstructor)
console.log(instructor);

/* de-structuring
const navbar=({comapany}) => {

}

navbar(comapany="kuldeep")

*/


//JSON

// {
//   "name": "Kuldeep",
//   "coursename": "Js Languange",
//   "price": "Free"
// }

[
    {},
    {},
    {}
]