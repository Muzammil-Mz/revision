//this default paramter helps out in giving default value when passing a value to function parameter 
//having parametres of x and y but user passed only of x not y this results in error 


// function sum(x,y){
//     return x+y
// }
// console.log(sum(5,2)); //7



// function sum(x,y){
//     return x+y
// }
// console.log(sum(5)); //Nan 



// function sum(x=2,y=8){ // here we assigned default value of x and y as 2 and 8. this works in absence of function calling argumetns
//     return x+y
// }
// console.log(sum(8)); 