const fs = require("fs")
//fs refers to file sysytem
fs.readFile("sample.txt","utf-8",function(err,data){
    console.log(data);
})

console.log("Hi Buddy");

for(let i =0;i<10000000000;i++)
{

}
console.log("Bye Buddy")

// This example showcases that .readFile is async in nature and it needs to wait until the control is back to it , even if it completes before time