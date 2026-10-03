let reviews: number[]=[5,5,4.5,1.3];
let total: number=0;
for(let reveiw of reviews){
    console.log("Current reveiw rating "+reveiw);
    total+=reveiw;
}

let average: number=total/reviews.length;

console.log(`Average is ${average}`);