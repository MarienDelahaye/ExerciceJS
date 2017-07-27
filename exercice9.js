// Variables
var result = "\n"



// Script Part
for (var i = 0;i < 8; i++){
for (var j = 0;j < 4; j++){

}
if ((i+j) % 2 === 0){
    result+= "#";
} else {
    result+= "_";
}
result+= "\n";
}
console.log(result);
