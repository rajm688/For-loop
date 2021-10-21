class product{
    constructor(p1, name1,rate){
        this.p1 =p1;
        this.name1 = name1;
        this.rate = rate
    }
}
let product1 = new product("p1", "name 1", "100");
let product2 = new product("p2", "name 2", "200");
let product3 = new product("p3", "name 3", "300");
let arr = [product1, product2, product3]
for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}
console.log("__________________________");
for(value in arr){
    console.log(arr[value])
}
console.log("__________________________");
for(value of arr){
    console.log(value)
}
console.log("__________________________");
arr.forEach((value => console.log(value)
))