// Questions for Nested if-else
// Determine if a student has passed an exam:

// If marks are greater than or equal to 50, check attendance:
// If attendance is greater than or equal to 75%, print "Pass with good attendance."
// Otherwise, print "Pass with low attendance."
// Otherwise, print "Fail."

// let marks=40
// let attendance=20
// if(marks>=50){
//     if(attendance>=75){
// console.log("passed with good attendance");

//     }
//     else{
//         console.log("passed but with low attendance");

//     }

// }else{
//     console.log("fail");

// }







//2 E-commerce discount eligibility:

// If the purchase amount is greater than $500, check membership:
// If the user is a member, offer a 20% discount.
// Otherwise, offer a 10% discount.
// If the purchase amount is less than $500, print "No discount."


// let purchaeAmount = 555
// let membership = true
// if (purchaeAmount >= 500) {
//     if (membership) {
//         console.log("you avial discount of 20");

//     } else {
//         console.log("you avial discount of 10");

//     }
// } else {
//     console.log("no discount");

// }



// Weather advisory system:

// If the temperature is below 0°C, check for snow:
// If snowing, print "Stay indoors due to heavy snow."
// Otherwise, print "Cold but no snow."
// If the temperature is between 0°C and 30°C, print "The weather is pleasant."
// Otherwise, print "It's hot outside."

// let t=35
// let snow=false
// if (t<0){
//     if (snow){
//         console.log("stay inddors");
        
//     } else {
//         console.log("cold but no snow");
        
//     } 
// }
//     else if  (t>=0 && t<=30){
//         console.log("weathe is plesant");
        
//     } else{
//         console.log("its hot");
        
//     }
    





// Movie Ticket Pricing:

// If the person is under 18, check if they are a student:
// If a student, print "Discounted student ticket: $5."
// Otherwise, print "Standard child ticket: $7."
// If the person is 18 or older, check if they are a senior:
// If a senior, print "Senior ticket: $8."
// Otherwise, print "Standard adult ticket: $10."


// let role="student"
// let age=17
// if (role=="student"){
//     if (age<18){
//         console.log("Discounted student ticket");
        
//     }else{
//         console.log("standard child ticket");
        
//     }

// }
// else if(role="senior"){
//     console.log("senior ticket ");
    
// }
// else {
//     console.log("standsard ticket");
    
// }




// Bank Account Access:

// If a user is logged in, check their account type:
// If it's a savings account, print "Access granted to savings account."
// If it's a checking account, print "Access granted to checking account."
// If the user is not logged in, print "Please log in to access your account."