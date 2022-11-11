// Taski 1
// let a=prompt("Enter your minutes");
// let h=a/60%24;
// let m=a%60;
// console.log(Math.floor(h))
// console.log(Math.floor(m))



// Taski 2 {Khramit}
// let a=+prompt("Enter your minutes");
// let h=a/3600%24;
// let m=a/60%60;
// let s=a%60;
// console.log(Math.floor(h))
// console.log(Math.floor(m))
// console.log(Math.floor(s))
///TYUI
// if(m.length==1){
//     console.log("0"+Math.floor(m))
// }
// else{
//     console.log(Math.floor(m))
// }
// console.log(Math.floor(s))

// Taski 3 {Khramit}
// let a=+prompt("Enter your minutes");
// let b=+prompt("Enter your minutes");
// let c=+prompt("Enter your minutes");
// let d=(a*100+b)*c;
// console.log(Math.floor(d/100))
// console.log(d%100)

// Taski 4
// let a=+prompt("Enter your h");
// let b=+prompt("Enter your m1");
// let c=+prompt("Enter your s1");
// let a2=+prompt("Enter your h2");
// let b2=+prompt("Enter your m2");
// let c2=+prompt("Enter your s2");

// let sum1=a*3600+b*60+c;
// let sum2=a2*3600+b2*60+c2;
// console.log(Math.abs(sum1-sum2))


// Taski 5
let a=prompt("Enter your h");//1 2 3 4  2002
digits0= Math.floor(a/1000);// 1
digits2= Math.floor( a%1000/100);// 2
digits3=  Math.floor( a%100/10);// 3
digits4=Math.floor( a%10); // 4
if(digits0==digits4 && digits2==digits3){
    console.log("Yes")
}
else {
    console.log("No")
}




// alert("Put four number")
// let a11=prompt("Enter your 1")
// let a21=prompt("Enter your 2")
// let a31=prompt("Enter your 3")
// let a41=prompt("Enter your 4")
// alert("Your number is"+" "+a11+a21+a31+a41)
// let a1=+prompt("Enter your 1")
// let a2=+prompt("Enter your 2")
// let a3=+prompt("Enter your 3")
// let a4=+prompt("Enter your 4")
// if(a1==a4 && a2==a3){
// alert("Yes")
// }
// else {
// alert("No")
// }

// Taski 6
// let cnt=0;
// for(i=0;i<3;i++){
//     let p=prompt("Enter your number")
//     if(p>0){
// cnt++
//     }
// }
// console.log(cnt)



// Taski 7
// let n=+prompt("Enter your")
// let p="  ";
// let c="  ";
// for(i=1;i<=n;i++){
//     c=c+" "+i;
// }
// for(i=n;i>0;i--){

//     p+=" "+i;
// }
// console.log(c)
// console.log(p)

// Taski 8
// let n=+prompt("Enter your a")
// let b=+prompt("Enter your b")
// let p=0;
// for(i=n;i<=b;i++){
//     p+=(i*i);
// }
// console.log(p)
