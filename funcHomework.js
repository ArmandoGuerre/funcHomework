//Function Declaration 
function lotteryNumber() {
    numOne = (1 + Math.floor(Math.random() * 49));
    console.log("Random Number for the lotteryNumber function is " +numOne+ ".");
}
lotteryNumber()

//Function Expression  
const getSixNumbers = function(){
    console.log("the following numbers are from the function named getSixNumbers.. ")
    for(lot=0; lot<6; lot++){
        numTwo = (1 + Math.floor(Math.random() * 49));
        console.log(numTwo);
    }
}
str = getSixNumbers()