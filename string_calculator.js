const express= require('express');
const mocha= require('mocha');
const app= express();
const PORT=process.env.PORT || 3000

console.log("Assement Starts");
// Creating a function to calculate strings and write Test cases
const stringsCalculators=(str_1,str_2)=>{

    if(str_1 && str_2){
        return str_1 + str_2;
    }else if(!str_1 && str_2)
    {
        return 0
    }else if(str_1 && !str_2){
        return 0
    }else{
        return "Invalid Inputs"
    }

}

let response_1 = stringsCalculators("str_1","str_2");
console.log("response_1: ",response_1);



console.log("Assement Ends");

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
})