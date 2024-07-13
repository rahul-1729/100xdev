// question : Wish according to gender--------------------

// let first="Rahul"
// let last="Kumar"
// let gender ="Female"

// const greet = (first,last,gender)=>{
//     if(gender =="Male")
//     console.log(`Hello ji ${first} ${last}`);
//     else 
//     console.log("Namaste")
// }

// greet(first,last,gender)

// Question- For loop : print 0 to 1000--------------------
    // for(let i =0;i<=1000;i++)
    // console.log(`${i}`);

//Objects-------------------
//  const users = [
//     {
//         Name:"Rahul",
//         Gender:"Male"
//     },
//     {
//         Name:"Priya",
//         Gender:"Female"
//     },
//     {
//         Name:"Khushi",
//         Gender:"Female"
//     }

//  ]

//  let n = users.length;
//  for(let i =0;i<n;i++)
//  if(users[i]["Gender"]=="Female")
//  console.log(users[i]["Name"])

//callback ------------------------
// calling function inside a function is termed as callback
//eg.

// function sum(a,b)
// {
//     return a+b;
// }

// function minus(a,b)
// {
//     return a-b;
// }


// function arthemetic(a,b,arth) // we are passing a function inside a function 
//                               // that is arth  
// {
//    const res = arth(a,b);
//    console.log(res);
// }

// arthemetic(1,3,minus);


// setTimeout setInterval these two internal funtions also use callbacksa since we pass functions to these inbuilt functions


// eg. this example also showcases that js is not completely interpreted language
    // function greet()
    // {
    //     console.log(say);
    // }

    // setTimeout(greet,4*1000);
    // console.log("hello")
    // const say = "hello Buddy ,keep going and be silent this time"

    // setInterval
    //  function greet()
    // {
    //     console.log(say);
    // }

    // setInterval(greet,2*1000); // we pass function as an arguemnt
    // const say = "hello Buddy ,keep going and be silent this time"

    //Assignments--------------------
    // 1.create a javascript countdown from 30 to 0
    // 2.calculate the time it takes between a setTimeout call and their inner function running
    // 3.create a terminal HH:MM:SS
    

    // q1.-------------------
    // let i =3;
    // function count ()
    // {   
    //     if(i<0)
    //     {
    //         clearInterval(internalId)
    //         return;
    //     }
    //     console.log(i);
    //     i=i-1;
        
    // }

    
    // let internalId =setInterval(count,1*1000)

    // q2.----------------------
    
        // function s(a,b)
        // {
        //     console.log(`Sum is ${a+b}`);
        //     console.log(Date.now()-start);
        //     return;
        // }

        // const start = Date.now();
        // setTimeout(()=>{s(1,3)

        // },2*1000)

    // q3.........................



        // var hour =0;
        // var min =0;
        // var sec =0;
        // function clock()
        // {   
        //     sec = sec+1;
        //     if(sec>=60)
        // {
        //         min=min+1;
        //         sec =0;
        //     }
        // if(min>=60)
        // {
        //     hour=hour+1;
        //     min =0;
        // }
        // if(hour>=24)
        // {
        //     sec =0;
        //     min =0;
        //     hour =0;
        // }
        // let h = hour<10?"0"+hour.toString():hour.toString();
        // let m = min<10?"0"+min.toString():min.toString();
        // let s=  sec<10?"0"+sec.toString():sec.toString()

        // console.log(`${h}:${m}:${s}`);


        // }



        // setInterval(clock,1*1000)

        //NOTE: setTimeout and setInterval are asyncronous in nature