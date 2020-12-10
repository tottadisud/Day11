function fname(){
    alert("hello");
}

//function with parameter
function withparameter(paramater1){
alert(paramater1);
}
withparameter("hello APSSDC")

var return1 = function(a,b){
    return(alert("a value is" +a +"b value is "+b))
}
return1(3);

var arrowFunction=(a)=>{
    return(console.log(a))
}

arrowFunction("helllo miarcale");



var b=[1,2,3,4,5,6,7,8]

let hf=()=>{
    var c=b.filter(
        (data)=>{
            return (data%2==0)
        } )
        alert(c)
   
    
//var c=[]
//for(var i=0;i<b.length;i++){
  //  if(b[i]%2==0){
   //      c.push(b[i]);

   // }
//}
//alert(c);

}
hf();

//nested function

let greet=(data1)=>{

    let message=()=>{
    alert("it nested function" +data1)
}
return message();
}
greet("how r u")

// higher oredr function
 function highero(){
     let a=[1,2,3,4,5,6,7,8,9]
     let b=[]
     for (let i=0; i< a.length; i++){
         if(a[i]%2 !=0){
             b.push(a[i])

         }

     }
     alert(b)
 }
 highero();

 function higherb(){
    let a1=[11,22,33,44,55,66,77,88,99]
    let b1=a1.filter((parm)=>{
         return(parm%2 !=0)

    })
    alert(b1)
   
}
higherb();



