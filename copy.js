const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1];
arr3.push(6);
console.log("arr1: ", arr1);
console.log("arr3: ", arr3);

const arr4 = [...arr1, ...arr2];
console.log("arr4: ", arr4)

const userProfile = {
    name: "Balázs",
    age: 200,
    country: "Hungary"
};

const userProfile2 = {...userProfile, gender: "Apache helicopter", name: "Jónás"};
console.log("userProfile: ", userProfile);
console.log("userProfile2: ", userProfile2);


