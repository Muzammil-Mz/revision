// 1. Write a program to categorize a person based on their age: 
//    - Child (age < 13)
//    - Teenager (13 <= age < 20)
//    - Adult (20 <= age < 60)
//    - Senior Citizen (age >= 60)
// let age = 15
// if (age < 13) {
//     console.log("child");

// } else if (age >= 13 && age <= 20) {
//     console.log("teenager");

// } else if (age >= 20 && age < 60) {
//     console.log("adult");

// } else {
//     console.log("citizen");

// }



// 2. Create a grading system:
//    - A: 90-100
//    - B: 75-89
//    - C: 50-74
//    - F: Below 50

// let marks=22
// if(marks>=90 && marks<=100){
//     console.log("A");
    
// } else if(marks>=75 && marks<=89){
//     console.log("B");
    
// } else if (marks>=50 && marks<=74){
//     console.log("C");
    
// } else {
//     console.log("F");
    
// }



// 3. Write a program to determine the time of day:
//    - Morning (0-12 hours)
//    - Afternoon (12-17 hours)
//    - Evening (17-20 hours)
//    - Night (20-24 hours)

// let time=122
// if(time>=0 && time<12){
//     console.log("morning");
    
// } else if(time>=12& time<17)
// {
//     console.log("afternoon");
    
// } else if(time>=17&& time<20){
//     console.log("Evening");
    
// }else{
//     console.log("night");
    
// }



// 4. Determine the discount based on purchase amount:
//    - No discount for amount < $100
//    - 10% discount for $100-$500
//    - 20% discount for > $500

let price=800

if (price<100){
    console.log("sorry");
    
} else if (price>=100 && price<500){
    console.log(`you avail 10 percent discount`);
    console.log(`discount price ${price/10} from ${price} `);
    
    
} else if (price>=500){
    console.log(`you avail discount of 20 percent`);
    console.log(`discount price ${price/20} from ${price}`);
    
}






// 5. Create a role-based access control program:
//    - Admin: Full access
//    - Moderator: Limited access
//    - User: Read-only access
//    - Guest: No access

let role="admin"
if (role=="admin"){
    console.log("full access");
    
} else if (role=="moderator"){
    console.log("limited");
    
} else if(role=="user"){
    console.log("read only");
    
} else{
    console.log("no access");
    
}