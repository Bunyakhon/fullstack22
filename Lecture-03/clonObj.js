const obj1 = {
    person: "Bunyakhon",
    weight: 85
}

const obj2 = {... obj1};
obj2.weight = 75;
console.log(obj1);
console.log(obj2);