var inpOne = prompt("enter your text");

var text = inpOne.charAt(0);
var stringArr = [];
var numberArr = [];

if(text >= 0){
    console.log('number');
    inpOne = Number(inpOne);
    numberArr[numberArr.length] = inpOne;
    console.log(numberArr);
}
else if(typeof text == "string"){
    console.log('string');
    stringArr[stringArr.length] = inpOne;
    console.log(stringArr);
}
else{
    console.log('404((');
}